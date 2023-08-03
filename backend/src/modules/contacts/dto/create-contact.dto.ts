import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { hashSync } from 'bcryptjs';
import { Transform } from 'class-transformer';

export class CreateContactDto {
  @IsString()
  name: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  @IsNotEmpty()
  @Transform(({ value }: { value: string }) => hashSync(value, 10), {
    groups: ['transform'],
  })
  password: string;
}
