import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { RedisModule } from '@liaoliaots/nestjs-redis';

import { MovieModule } from "./movie/movie.module"
import { AuthModule } from "./auth/authModule"
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    RedisModule.forRoot({
      config: {
        host: 'redis-16455.c309.us-east-2-1.ec2.redns.redis-cloud.com',
        port: 16455,
        password: "nvSdXpRCIUDpys3VOLfC5cFGldllQsUy"
      },
    }),
    AuthModule,
    MovieModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
