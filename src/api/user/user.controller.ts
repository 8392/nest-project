import { Controller, Body, Query, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUserApi(@Body() req): Promise<object> {
    return this.userService.createUserApi(req);
  }

  @Get()
  async getListUserApi(@Query() req): Promise<Array<object>> {
    return this.userService.getListUserApi(req);
  }
}
