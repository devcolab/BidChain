import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Auction } from 'src/auction/entities/auction.entity';
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

  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
  })
  userId: string;

  @ForeignKey(() => Auction)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  auctionId: string;
}
