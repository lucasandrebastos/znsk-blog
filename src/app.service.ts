import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './app.controller';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  create(createCatDto: CreateCatDto): string {
    return createCatDto.name;
  }
}
