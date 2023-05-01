import { InjectRedis } from '@nestjs-modules/ioredis';
import { Injectable } from '@nestjs/common';
import { Redis } from 'ioredis';

@Injectable()
export class RedisService {
  constructor(@InjectRedis() readonly redisClient: Redis) {}

  get(key: string) {
    return this.redisClient.get(key);
  }
}
