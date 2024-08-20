import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  HasOne,
  Model,
  Table,
} from 'sequelize-typescript';
import { PaymentOrder } from 'src/payment-orders/entities/payment-order.entity';
import { Product } from 'src/products/entities/product.entity';
import { UserAuction } from 'src/user-auction/entities/user-auction.entity';
import { User } from 'src/users/entities/users.entity';
import { ApiProperty } from '@nestjs/swagger';

export enum AuctionType {
  Auction = 'Auction',
  Buy = 'Buy',
}

@Table({
  tableName: 'auctions',
})
export class Auction extends Model {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @ApiProperty({
    example: 100.0,
    description: 'The initial bid for the auction',
  })
  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  initialBid: number;

  @ApiProperty({
    example: '2023-01-01T00:00:00.000Z',
    description: 'The start date of the auction',
  })
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  startDate: Date;

  @ApiProperty({
    example: '2023-01-10T00:00:00.000Z',
    description: 'The end date of the auction',
  })
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  endDate: Date;

  @ApiProperty({
    example: 'Buy',
    enum: AuctionType,
    description: 'The type of auction',
  })
  @Column({
    type: DataType.ENUM,
    values: Object.values(AuctionType),
    allowNull: false,
  })
  transactionType: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
    allowNull: true,
  })
  winnerId?: string;

  @ApiProperty({
    example: 'uuid',
    description: 'The unique identifier for the product',
  })
  @ForeignKey(() => Product)
  @Column({
    type: DataType.UUID,
    allowNull: false,
    unique: true,
  })
  productId: string;

  @ApiProperty({
    example: true,
    description: 'Whether the transaction is active or not',
  })
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  })
  active: boolean;

  // Relations

  // 1 -> 1: One Transaction has one product
  @BelongsTo(() => Product)
  product: Product;

  @HasOne(() => PaymentOrder)
  paymentOrder: PaymentOrder;

  // 1 -> N: One Transaction belongs to a PaymentOrder

  // N -> N: Many Transactions can have many users (bidders)
  @BelongsToMany(() => User, () => UserAuction)
  users: User[];
}
