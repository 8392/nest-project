import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('执行');
    return 'Hello World!222222';
  }
}
