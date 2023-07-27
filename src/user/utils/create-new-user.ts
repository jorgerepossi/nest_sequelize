import { CreateUserDTO } from '../dtos/create-user.dto';

export function createNewUser(user: CreateUserDTO) {
  return {
    name: user.name,
    lastname: user.lastname,
    email: user.email,
    phone: user.phone,
  };
}
