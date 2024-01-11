import { IsNotEmpty, MaxLength } from 'class-validator';

export class RoleDto {
  @MaxLength(5, { message: '角色名称最大长度为5' })
  @IsNotEmpty({ message: '角色名称不能为空' })
  roleName!: string;

  @MaxLength(255, { message: '角色描述最大长度为50' })
  @IsNotEmpty({ message: '角色描述不能为空' })
  remark!: string;
}
