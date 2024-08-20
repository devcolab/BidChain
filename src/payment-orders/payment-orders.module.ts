import { Module } from '@nestjs/common';
import { PaymentOrdersService } from './payment-orders.service';
import { PaymentOrdersController } from './payment-orders.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Auction } from 'src/transaction/entities/auction.entity';
import { User } from 'src/users/entities/users.entity';
import { PaymentOrder } from './entities/payment-order.entity';

@Module({
  imports: [SequelizeModule.forFeature([PaymentOrder, Auction, User])],
  controllers: [PaymentOrdersController],
  providers: [PaymentOrdersService],
  exports: [PaymentOrdersService, PaymentOrdersModule],
})
export class PaymentOrdersModule {}
