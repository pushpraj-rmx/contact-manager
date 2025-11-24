import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/api/v1/')
export class AppController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly appService: AppService) { }

  @Get()
  getRandomQuote(): object {
    return JSON.parse(this.appService.getRandomQuote()) as object;
  }
}
