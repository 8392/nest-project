import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RoleEntity } from './entities/role.entity';
import { RoleDto } from './dto/role.dto';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(RoleEntity)
    private roleRepository: Repository<RoleEntity>,
    private readonly configService: ConfigService,
  ) {}

  async createRoleApi(req: RoleDto): Promise<object> {
    const data = this.roleRepository.create({
      roleName: req.roleName,
      remark: req.remark,
    });

    const user = await this.roleRepository.save(data);
    // this.roleRepository.createQueryBuilder('role');
    return user;
  }

  async updateRoleApi(req): Promise<object> {
    const data = await this.roleRepository.update(req.id, req);
    return data;
  }

  async getListRoleApi(req): Promise<Array<object>> {
    const { page, size } = req;
    const skip = (page - 1) * size;

    const data = await this.roleRepository.find({
      skip,
      take: size,
    });
    console.log('列表', data);
    return data;
  }

  async deleteRoleApi(req): Promise<object> {
    await this.roleRepository.delete(req.id);
    return {
      code: 0,
      msg: '操作成功',
    };
  }
}
