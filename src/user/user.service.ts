import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import {
  CreateUserDTO,
  PaginationQueryDTO,
  UpdateUserDTO,
} from 'src/user/dtos';
import { User } from 'src/schemas/user.model';
import { Repository } from 'sequelize-typescript';
import { createNewUser } from './utils/create-new-user';
import { getUserById } from './utils/get-user-by-id';

@Injectable()
export class UserService {
  //constructor(@InjectModel(User) private userModel: typeof User) {}
  constructor(
    @InjectModel(User) private readonly userRepository: Repository<User>,
  ) {}

  getAll(query: PaginationQueryDTO): Promise<User[]> {
    return this.userRepository.findAll(query);
  }

  async createUser(user: CreateUserDTO): Promise<User> {
    return await this.userRepository.create(createNewUser(user));
  }

  getById(id: string): Promise<User> {
    return this.userRepository.findOne(getUserById(id));
  }

  async updateUser(updateUserDto: UpdateUserDTO, id: string) {
    await this.userRepository.update(updateUserDto, { where: { id } });
    return 'User updated successfully!';
  }
}
