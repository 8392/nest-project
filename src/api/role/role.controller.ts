import {
  Body,
  Query,
  Controller,
  Post,
  Put,
  Get,
  Delete,
} from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleDto } from './dto/role.dto';

@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post()
  async createRoleApi(@Body() req: RoleDto): Promise<object> {
    return this.roleService.createRoleApi(req);
  }

  @Put()
  async updateRoleApi(@Body() req): Promise<object> {
    return this.roleService.updateRoleApi(req);
  }

  @Get()
  async getListRoleApi(@Query() req): Promise<Array<object>> {
    return this.roleService.getListRoleApi(req);
  }

  @Delete()
  async deleteRoleApi(@Body() req): Promise<object> {
    return this.roleService.deleteRoleApi(req);
  }
}
