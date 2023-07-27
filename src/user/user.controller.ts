import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Patch,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import {
  CreateUserDTO,
  PaginationQueryDTO,
  UpdateUserDTO,
} from 'src/user/dtos';
import { User } from 'src/schemas/user.model';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAll(@Query() pagination: PaginationQueryDTO): Promise<User[]> {
    return this.userService.getAll(pagination);
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.userService.getById(id);
  }
  @Post()
  async createUser(@Body() createUserDto: CreateUserDTO) {
    return this.userService.createUser(createUserDto);
  }

  @Patch(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDTO,
  ) {
    return this.userService.updateUser(updateUserDto, id);
  }
}
