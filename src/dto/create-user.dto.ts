import { IsOptional, IsString } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  @IsOptional()
  name: string;
  @IsString()
  @IsOptional()
  lastname: string;
}
