import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserAuctionService } from './user-auction.service';
import { UserAuction } from './entities/user-auction.entity';
import { User } from 'src/users/entities/users.entity';
import { Auction } from 'src/transaction/entities/auction.entity';
import { UserAuctionController } from './user-auction.controller';

@Module({
  imports: [SequelizeModule.forFeature([UserAuction, User, Auction])],
  providers: [UserAuctionService],
  exports: [UserAuctionService],
  controllers: [UserAuctionController],
})
export class UserAuctionModule {}
