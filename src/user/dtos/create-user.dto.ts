import { IsString } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  name: string;
  @IsString()
  lastname: string;
  @IsString()
  phone: string;
  @IsString()
  email: string;
}
