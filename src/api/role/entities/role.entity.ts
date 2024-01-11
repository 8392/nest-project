import { SharedEntity } from '@/shared/entities/base.entity';
import { Entity, Column } from 'typeorm';

@Entity('role')
export class RoleEntity extends SharedEntity {
  @Column({
    type: 'varchar',
    length: 50,
    name: 'role_name',
    comment: '角色名称',
  })
  roleName!: string;

  @Column({
    type: 'varchar',
    name: 'remark',
    comment: '角色描述',
  })
  remark!: string;
}
