import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { UpdateUserDto } from './dtos/update-user.dto';
import { CreateUserDto } from './dtos/creat-user.dto';
import { v4 as uuid } from 'uuid';
@Injectable()
export class UsersService {
  private users: UserEntity[] = []
  findUsers(): UserEntity[] {
    return this.users;
  }

  findUserbyId(id: string): UserEntity {
    return this.users.find((user) => user.id === id);
  }

  createUser(CreateUserDto: CreateUserDto): UserEntity {
  const newUser: UserEntity = {
    ...CreateUserDto,
    id: uuid(),
  };
  this.users.push(newUser);
  return newUser;
}

  updateUser(id: string, UpdateUserDto: UpdateUserDto): UserEntity {
    const index = this.users.findIndex((user) => user.id === id);
    this.users[index] = { ...this.users[index], ...UpdateUserDto };
    return this.users[index];
  }

  deleteUser(id: string):void {
    const index = this.users.findIndex((user) => user.id === id);
    this.users.slice(index, 1);
  }
}


