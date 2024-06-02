import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, MaxLength, MinLength,  } from "class-validator";

export class LoginAuthDto {
    @ApiProperty()
    @IsEmail()
    email: string;

    @ApiProperty()
    @MinLength(8)
    @MaxLength(20)
    password: string;
}