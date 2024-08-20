import { Module } from '@nestjs/common';
import { AuctionService } from './auction.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Auction } from './entities/auction.entity';
import { UserAuction } from '../user-auction/entities/user-auction.entity';
import { PaymentOrder } from '../payment-orders/entities/payment-order.entity';
import { ProductsModule } from 'src/products/products.module';
import { TransactionSchedulerService } from './auctionScheduler.service';
import { PaymentOrdersModule } from 'src/payment-orders/payment-orders.module';
// Importa UserAuctionModule
import { UserAuctionModule } from 'src/user-auction/user-auction.module';
import { PaymentOrdersService } from 'src/payment-orders/payment-orders.service';
import { AuctionController } from './auction.controller';

@Module({
  controllers: [AuctionController],
  providers: [AuctionService, PaymentOrdersService, TransactionSchedulerService],
  imports: [
    SequelizeModule.forFeature([Auction, UserAuction, PaymentOrder]),
    ProductsModule,
    PaymentOrdersModule,
    UserAuctionModule,
  ],
  exports: [AuctionService],
})
export class AuctionModule {}
