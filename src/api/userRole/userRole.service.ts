import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserRoleEntity } from './entities/userRole.entity';
import { UserEntity } from '../user/entities/user.entity';

@Injectable()
export class UserRoleService {
  constructor(
    @InjectRepository(UserRoleEntity)
    private userRoleRepository: Repository<UserRoleEntity>,
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    private readonly configService: ConfigService,
  ) {}

  async createUserRole(req): Promise<string> {
    const roleIdList = await this.userRoleRepository.find({
      where: { userId: req.userId },
      select: ['id'],
    });

    if (roleIdList?.length) {
      const ids = roleIdList.map((item) => item.id);
      await this.userRoleRepository.delete(ids);
    }

    const list = req.roleIds.map((item) => {
      return {
        userId: req.userId,
        roleId: item,
      };
    });
    const listData = this.userRoleRepository.create(list);
    await this.userRoleRepository.save(listData);
    return '操作成功';
  }

  async getRoleUser(req): Promise<Array<object>> {
    const data = await this.userRepository
      .createQueryBuilder('user')
      .innerJoin('user_role', 'userRole', 'user.id = userRole.userId')
      .where('userRole.roleId = :roleId', { roleId: req.roleId })
      // .skip(0)
      // .take(2)
      .getMany();
    return data;
  }
}
