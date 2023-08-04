import { IsDate, IsEmail, IsString } from 'class-validator';

export class CreateContactDto {
  @IsString()
  name: string;

  @IsString()
  @IsEmail()
  email: string;
  @IsString()
  phoneNumber: string;
  @IsDate()
  createdAt: Date;
}
