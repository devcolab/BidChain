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
  @IsUUID()
  id: string;

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

  @IsOptional()
  @IsString()
  paymentId?: string;
}
