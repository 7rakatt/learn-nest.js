import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './creat-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {}
