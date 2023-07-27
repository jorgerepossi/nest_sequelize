import { IsOptional, IsString } from 'class-validator';
export class UserDTO {
  @IsOptional()
  id: number;

  @IsString()
  name: string;

  @IsString()
  lastname: string;
}
