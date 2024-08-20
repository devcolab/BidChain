import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
// Modulos
import { Category } from '../products/entities/category.entity';
import { PaymentOrder } from 'src/payment-orders/entities/payment-order.entity';
import { Product } from '../products/entities/product.entity';
import { Auction } from 'src/transaction/entities/auction.entity';
import { User } from 'src/users/entities/users.entity';
import { UserAuction } from 'src/user-auction/entities/user-auction.entity';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      dialectModule: require('pg'),
      host: process.env.DBHOST,
      port: Number(process.env.DBPORT),
      username: process.env.DBUSERNAME,
      password: process.env.DBPASSWORD,
      database: process.env.DBDATABASE,
      models: [Category, PaymentOrder, Product, Auction, User, UserAuction],
      autoLoadModels: true,
      synchronize: true,
      logging: false,
      sync: { force: false },
    }),
    SequelizeModule.forFeature([
      Category,
      PaymentOrder,
      Product,
      Auction,
      User,
      UserAuction,
    ]),
  ],
  exports: [SequelizeModule],
})
export class DatabaseModule {}
