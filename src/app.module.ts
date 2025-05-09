import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './posts/entities/post.entity';

import { ConfigModule } from '@nestjs/config';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // deixa disponível em toda a aplicação
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: [Post],
      synchronize: true, // cuidado com isso em produção
    }),

    PostsModule,
  ],
})
export class AppModule {}
