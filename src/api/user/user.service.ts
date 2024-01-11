import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    private readonly configService: ConfigService,
  ) {}

  async createUserApi(req): Promise<object> {
    const data = this.userRepository.create({
      username: req.username,
      password: req.password,
    });

    const user = await this.userRepository.save(data);
    return user;
  }

  async getListUserApi(req): Promise<Array<object>> {
    const { page, size } = req;
    const skip = (page - 1) * size;
    let query = {};
    if (page) {
      query = {
        skip,
        take: size,
      };
    }
    const data = await this.userRepository.find(query);
    return data;
  }
}
