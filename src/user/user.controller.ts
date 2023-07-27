import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from 'src/dto/user.dto';
import { User } from 'src/schemas/user.model';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getAllUsers() {
    return this.userService.getAllUsers();
  }
  @Post()
  createUser(@Body() newUser: UserDTO) {
    return this.userService.createUser(newUser);
  }
  @Get(':id')
  findOneUser(@Param('id') id: number): Promise<User> {
    return this.userService.findOne(id);
  }
}
