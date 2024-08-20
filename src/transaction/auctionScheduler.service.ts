import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { Auction } from './entities/auction.entity';
import { UserAuctionService } from 'src/user-auction/user-auction.service';
import { PaymentOrdersService } from 'src/payment-orders/payment-orders.service';

@Injectable()
export class TransactionSchedulerService {
  private readonly logger = new Logger(TransactionSchedulerService.name);

  constructor(
    @InjectModel(Auction) private auctionModel: typeof Auction,
    private readonly userAuctionService: UserAuctionService,
    private readonly paymentOrdersService: PaymentOrdersService,
  ) {}

  @Cron('*/5 * * * * *') // Runs every 5 seconds for demonstration purposes
  async handleCron() {
    const now = new Date();

    try {
      // Find all active auctions that have ended
      const endedAuctions = await this.auctionModel.findAll({
        where: {
          endDate: {
            [Op.lte]: now,
          },
          active: true,
        },
      });

      for (const auction of endedAuctions) {
        try {
          const highestBid = await this.userAuctionService.highestBid(
            auction.id,
          );

          if (highestBid) {
            auction.winnerId = highestBid.user?.id;
          }

          auction.active = false;
          await auction.save();

          if (highestBid && highestBid.user) {
            await this.paymentOrdersService.create(
              {
                auctionId: auction.id,
                isPaid: false,
                tax: 12,
                total: highestBid.value,
                subTotal: highestBid.value,
              },
              highestBid.user.id,
            );
          }
        } catch (error) {
          this.logger.error(
            `Failed to process auction ${auction.id}: ${error.message}`,
            error.stack,
          );
        }
      }
    } catch (error) {
      this.logger.error(
        `Failed to retrieve ended auctions: ${error.message}`,
        error.stack,
      );
    }
  }
}
