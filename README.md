### 面向对象编程 class写法

- 引入多个表
```ts
imports: [TypeOrmModule.forFeature([UserRoleEntity, UserEntity])],

```

在server层使用
```ts
class UserRole {
constructor(
    @InjectRepository(UserRoleEntity)  //使用了两个表，都引入，查询
    private userRoleRepository: Repository<UserRoleEntity>,
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    private readonly configService: ConfigService,
  ) {}
}
```

### 计划

- 后面通过函数式的方式写sql，换一种方式，重构typeORm层，直接导入，不通过装饰器写法
- 直接导入

```ts
import { DataSource } from "typeorm"
import { User } from "./entity/User"

const myDataSource = new DataSource(/*...*/)
const user = await myDataSource.manager.findOneBy(User, {
    id: 1,
})
user.name = "Umed"
await myDataSource.manager.save(user)
```