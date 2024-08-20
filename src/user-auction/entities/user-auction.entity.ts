import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Auction } from 'src/transaction/entities/auction.entity';
import { User } from 'src/users/entities/users.entity';

@Table({
  tableName: 'UserAuction',
})
export class UserAuction extends Model {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  valueBid: number;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  hourBid: Date;

  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  userId: string;

  @ForeignKey(() => Auction)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  transactionId: string;
}
