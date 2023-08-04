import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { hashSync } from 'bcryptjs';

export class CreateUserDto {
  @IsString()
  @ApiProperty({
    description: 'Nome do usuário',
    default: 'Teobaldo',
    type: String,
  })
  name: string;

  @IsString()
  @IsEmail()
  @ApiProperty()
  email: string;

  @ApiProperty()
  @IsString()
  @MinLength(4)
  @IsNotEmpty()
  @Transform(({ value }: { value: string }) => hashSync(value, 10), {
    groups: ['transform'],
  })
  password: string;

  @IsDate()
  createdAt: Date;
}
