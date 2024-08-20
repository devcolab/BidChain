import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreatePaymentOrderDto {
  @IsOptional()
  @IsBoolean()
  isPaid: boolean;

  @IsOptional()
  @IsDate()
  paidAt?: Date;

  @IsNotEmpty()
  @IsNumber()
  tax: number;

  @IsNotEmpty()
  @IsNumber()
  subTotal: number;

  @IsNotEmpty()
  @IsNumber()
  total: number;

  @IsNotEmpty()
  @IsUUID()
  auctionId: string;

  @IsOptional()
  @IsString()
  paymentId?: string;
}
