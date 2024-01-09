import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UserService {
    constructor(
    private readonly configService: ConfigService
  ) {}

  getHello(): string {
    const config = this.configService.get('PORT')

    console.log('环境变量config', config);

    return '我是user界面';
  }
}
