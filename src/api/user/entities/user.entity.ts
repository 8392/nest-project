import { SharedEntity } from '@/shared/entities/base.entity';
import { Entity, Column } from 'typeorm';

@Entity('user')
export class UserEntity extends SharedEntity {
  @Column({
    type: 'varchar',
    length: 50,
    name: 'username',
    comment: '用户名',
  })
  username!: string;

  @Column({
    type: 'varchar',
    length: 50,
    name: 'password',
    comment: '密码',
  })
  password!: string;
}
