import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserAuctionDto } from './dto/create-user-auction.dto';
import { Sequelize } from 'sequelize-typescript';
import { UserAuction } from './entities/user-auction.entity';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/users/entities/users.entity';

@Injectable()
export class UserAuctionService {
  constructor(
    private readonly sequelize: Sequelize,
    @InjectModel(UserAuction) private userAuctionModel: typeof UserAuction,
    // @InjectModel(Transaction) private transactionModel: typeof Transaction,
    @InjectModel(User) private userModel: typeof User,
  ) {}

  async highestBid(transactionId: string) {
    const highestBidAuction = await this.userAuctionModel.findOne({
      where: { transactionId: transactionId },
      order: [['valueBid', 'DESC']],
    });

    if (highestBidAuction) {
      const userWinner = await this.userModel.findOne({
        where: { id: highestBidAuction.userId },
      });

      return {
        user: userWinner,
        value: highestBidAuction.valueBid,
      };
    }

    return null;
  }

  async findAll() {
    try {
      const users = await UserAuction.findAll();
      return { success: true, data: users };
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'Error al obtener todos las apuestas',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findOne(id: string) {
    try {
      const userAuction = await UserAuction.findByPk(id);
      const user = await User.findByPk(userAuction?.userId);
      if (!userAuction) {
        throw new HttpException('Apuesta no encontrada', HttpStatus.NOT_FOUND);
      }
      return { Apuesta: userAuction, Usuario: user };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      console.error(error);
      throw new HttpException(
        'Error al obtener el usuario',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async create(createUserAuctionDto: CreateUserAuctionDto, userId: string) {
    const userAuction = new UserAuction();
    userAuction.userId = userId;
    userAuction.transactionId = createUserAuctionDto.transactionId;
    userAuction.valueBid = createUserAuctionDto.valueBid;
    userAuction.hourBid = new Date();

    try {
      await userAuction.save();
      return { success: true, data: userAuction };
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'Error al crear la apuesta',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
