import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { UserRoleService } from './userRole.service';

@Controller('userRole')
export class UserRoleController {
  constructor(private readonly userRoleService: UserRoleService) {}

  @Post()
  async createUserRole(@Body() req): Promise<string> {
    return this.userRoleService.createUserRole(req);
  }

  @Get()
  async getRoleUser(@Query() req): Promise<Array<object>> {
    return this.userRoleService.getRoleUser(req);
  }
}
