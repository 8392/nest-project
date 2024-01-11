import { SharedEntity } from '@/shared/entities/base.entity';
import { Entity, Column } from 'typeorm';

@Entity('user_role')
export class UserRoleEntity extends SharedEntity {
  @Column({
    type: 'bigint',
    name: 'user_id',
    comment: '关联到user表主键id',
  })
  userId!: string;

  @Column({
    type: 'bigint',
    name: 'role_id',
    comment: '关联到role表主键id',
  })
  roleId!: string;
}
