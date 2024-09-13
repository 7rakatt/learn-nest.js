import { Module } from '@nestjs/common';
import { UsersModule } from './user/users.module';
@Module({
  imports: [UsersModule],
})
export class AppModule {}
