import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDTO } from 'src/dto/create-user.dto';

import { User } from 'src/schemas/user.model';

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private userModel: typeof User) {}

  getAllUsers(): Promise<User[]> {
    return this.userModel.findAll();
  }

  async createUser(user: CreateUserDTO) {
    const newUser = new this.userModel({
      name: user.name,
      lastname: user.lastname,
    });
    return newUser.save();
  }

  async findOne(id: number) {
    return await this.userModel.findOne({ where: { id } });
  }
}
