import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRoleController } from './userRole.controller';
import { UserRoleService } from './userRole.service';
import { UserRoleEntity } from './entities/userRole.entity';
import { UserEntity } from '../user/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserRoleEntity, UserEntity])],
  controllers: [UserRoleController],
  providers: [UserRoleService],
})
export class UserRoleModule {}
