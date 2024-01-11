import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiModule } from './api/api.module';
import { UserEntity } from '@/api/user/entities/user.entity';
import { RoleEntity } from '@/api/role/entities/role.entity';
import { UserRoleEntity } from '@/api/userRole/entities/userRole.entity';

import { getConfig } from './utils';

@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: false, // 忽视默认读取.env的文件配置
      isGlobal: true, // 全局注入
      load: [getConfig], // 加载配置文件
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        ({
          type: String(configService.get('datasource.driverName')),
          host: String(configService.get('datasource.host')),
          port: Number.parseInt(configService.get('datasource.port') ?? '3306'),
          username: String(configService.get('datasource.username')),
          password: String(configService.get('datasource.password')),
          database: String(configService.get('datasource.database')),
          // entities: [__dirname + '/**/*.entity{.ts,.js}'],
          entities: [UserEntity, RoleEntity, UserRoleEntity],
          synchronize: true,
          logging: configService.get('datasource.logging'),
          timezone: '+08:00', // 东八区
          cache: {
            duration: 60000, // 1分钟的缓存
          },
          extra: {
            poolMax: 32,
            poolMin: 16,
            queueTimeout: 60000,
            pollPingInterval: 60, // 每隔60秒连接
            pollTimeout: 60, // 连接有效60秒
          },
        }) as TypeOrmModule,
    }),
    ApiModule,
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
