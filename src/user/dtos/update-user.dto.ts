import { IsString, IsOptional } from 'class-validator';

export class UpdateUserDTO {
  @IsString()
  @IsOptional()
  name: string;
  @IsString()
  @IsOptional()
  lastname: string;

  @IsString()
  @IsOptional()
  email: string;

  @IsString()
  @IsOptional()
  phone: string;
}
