import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { AuctionModule } from './transaction/auction.module';
import { UserAuctionModule } from './user-auction/user-auction.module';
import { PaymentOrdersModule } from './payment-orders/payment-orders.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    ProductsModule,
    DatabaseModule,
    UsersModule,
    AuthModule,
    AuctionModule,
    UserAuctionModule,
    CloudinaryModule,
    PaymentOrdersModule,
    ScheduleModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
