import { SharedEntity } from '@/shared/entities/base.entity';
import { Entity, Column } from 'typeorm';


@Entity()
export class User extends SharedEntity {
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
    comment: '用户名',
  })
  password!: string;
}
