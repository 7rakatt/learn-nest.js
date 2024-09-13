import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/creat-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UserEntity } from './user.entity';
import { v4 as uuid } from 'uuid';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly UsersServive: UsersService) {
    
  }
  private readonly users: UserEntity[] = [];
  @Get()
  findAll(): UserEntity[] {
    return this.UsersServive.findUsers();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string): UserEntity {
    return this.UsersServive.findUserbyId(id);
  }

  @Post()
  creat(@Body() CreateUserDto: CreateUserDto): UserEntity {
    return this.UsersServive.createUser(CreateUserDto);
  }

  @Patch(':id')
  @HttpCode(200)
  update(
    @Param('id') id: string,
    @Body() UpdateUserDto: UpdateUserDto,
  ): UserEntity {
    return this.UsersServive.updateUser(id,UpdateUserDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id') id: string) {
    this.UsersServive.deleteUser(id);
  }
}
