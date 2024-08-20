import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { v4 as uuidv4 } from 'uuid';
import { UpdateAuctionDto } from './dto/update-transaction.dto';
import { CreateAuctionDto } from './dto/create-transaction.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Auction } from './entities/auction.entity';
import { UserAuction } from '../user-auction/entities/user-auction.entity';
import { Product } from 'src/products/entities/product.entity';
import { User } from 'src/users/entities/users.entity';
import { PaymentOrdersService } from 'src/payment-orders/payment-orders.service';
import { UserAuctionService } from 'src/user-auction/user-auction.service';
import { CreateUserAuctionDto } from 'src/user-auction/dto/create-user-auction.dto';
import { CreatePaymentOrderDto } from 'src/payment-orders/dto/create-payment-order.dto';
import { PaymentOrder } from 'src/payment-orders/entities/payment-order.entity';

//Luis
//evalua hora final con hora actual --> funcion -----done
// servicio buscar puja mas alta  ----done
// nuevo servicio
// una ves terminada la fecha limite enviar la ruta de la pasarela de pagos, usar servicio que busque puja mas alta de user-transaccion, tambien crea la orden con estado false hasta terminado el pago.

//Leo hacer crud orders y el seed de products

//Clay
// Agregar a la tabla campo active --> done
// Hago el crud transaccion
// fijarme en el usuario del create
// crud de usuario/transaccion

@Injectable()
export class AuctionService {
  constructor(
    private readonly sequelize: Sequelize,
    @InjectModel(Auction) private auctionModel: typeof Auction,
    @InjectModel(UserAuction) private userAuctionModel: typeof UserAuction,
    @InjectModel(Product) private productModel: typeof Product,
    @InjectModel(PaymentOrder) private paymentOrderModel: typeof PaymentOrder,
    private readonly paymentOrdersService: PaymentOrdersService, // Añade esta línea
    private readonly userAuctionService: UserAuctionService, // Y esta línea
  ) {}

  // cuando es compra directa crear orden de pago
  async create(createAuctionDto: CreateAuctionDto, userId: string) {
    try {
      const auction = await this.auctionModel.create({
        id: uuidv4(),
        initialBid: createAuctionDto.initialBid,
        startDate: new Date(),
        endDate: createAuctionDto.endDate,
        auctionType: createAuctionDto.auctionType,
        productId: createAuctionDto.productId,
      });

      const product = await this.productModel.findOne({
        where: {
          id: createAuctionDto.productId,
        },
      });

      if (!product) {
        throw new NotFoundException('Product not found');
      }

      await auction.save();

      return auction;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      } else if (error.name === 'SequelizeValidationError') {
        throw new HttpException('Validation error', HttpStatus.BAD_REQUEST);
      } else {
        console.error(error);
        throw new HttpException(
          'Error creating auction',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }

  async findAll() {
    try {
      const auctions = await Auction.findAll();

      return { success: true, data: auctions };
    } catch (error) {
      console.log(error);
      throw new HttpException(
        'Error getting all auctions',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findOne(id: string) {
    try {
      const auction = await Auction.findOne({
        where: {
          id: id,
        },
      });

      if (!auction) {
        throw new HttpException('Auction not found', HttpStatus.NOT_FOUND);
      }
      return auction;
    } catch (error) {
      console.log(error);
      throw new HttpException(
        `Error getting auction by id #${id}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(id: string, updateAuctionDto: UpdateAuctionDto) {
    try {
      const auction = await this.findOne(id);
      if (!auction) {
        throw new NotFoundException(`Error getting auction by id #${id}`);
      }

      await auction.update(updateAuctionDto);
      return auction;
    } catch (error) {
      console.log(error);
      throw new HttpException(
        'Error updating auction',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async partialUpdate(
    id: string,
    updateAuctiontionDto: Partial<UpdateAuctionDto>,
  ) {
    try {
      const auction = await this.findOne(id);
      if (!auction) {
        throw new NotFoundException('Auction not found');
      }

      await auction.update(updateAuctiontionDto);
      return { success: true, data: auction };
    } catch (error) {
      console.error(error);
      throw new Error('Error partially updating the auction');
    }
  }

  async remove(id: string) {
    try {
      const auction = await this.findOne(id);
      if (!auction) {
        throw new NotFoundException('Auction not found');
      }

      await auction.destroy();
      return { success: true };
    } catch (error) {
      console.log(error);
      throw new HttpException(
        `Error deleting auction by id #${id}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async remainingAuctionTime(id: string): Promise<string> {
    try{
      const auction = await this.auctionModel.findByPk(id);
      if (!auction) {
        throw new NotFoundException('Auction not found');
      }
      const now = new Date();
      const endTime = new Date(auction.endDate);
      const remainingTime = endTime.getTime() - now.getTime();
      const remainingSeconds = Math.floor((remainingTime / 1000) % 60);
    const remainingMinutes = Math.floor((remainingTime / (1000 * 60)) % 60);
    const remainingHours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
    const remainingDays = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    return `${remainingDays} days, ${remainingHours} hours, ${remainingMinutes} minutes, ${remainingSeconds} seconds`;

    } catch (error) {
      console.log(error);
      throw new HttpException(
        `Error getting the end time`,
         HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
        
  async findByUserId(userId: string) {
    try {
      const auctions = await this.auctionModel.findAll({
        where: {
          userId: userId,
        },
      });

      return { success: true, data: auctions };
    } catch (error) {
      console.log(error);
      throw new HttpException(
        `Error getting auctions by user id #${userId}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
