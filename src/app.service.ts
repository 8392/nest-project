import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
    constructor(
    private readonly configService: ConfigService
  ) {}

  getHello(): string {
    const config = this.configService.get('PORT')

    console.log('环境变量config', config);

    return 'Hello World!222222';
  }
}
