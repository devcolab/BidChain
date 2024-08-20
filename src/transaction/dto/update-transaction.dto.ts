import {
  IsDate,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
// import { AuctionType } from '../../products/entities/auction.entity';

export class UpdateAuctionDto {
  @IsOptional()
  @IsUUID()
  id?: string;

  @IsNumber()
  initialBid?: number;

  @IsDate()
  startDate?: string;

  @IsDate()
  endDate?: string;

  @IsEnum(['traditional auctions', 'direct purchase', 'judicial auctions'])
  auctionType?: string;

  @IsUUID()
  productId?: string;

  // @IsUUID()
  // orderId?: string;
}
