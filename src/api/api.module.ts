import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';
import { UserRoleModule } from './userRole/userRole.module';

@Module({
  imports: [UserModule, RoleModule, UserRoleModule],
})
export class ApiModule {}
