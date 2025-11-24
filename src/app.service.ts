import { Injectable } from '@nestjs/common';
import quotes from './data/quotes.json';

@Injectable()
export class AppService {
  getRandomQuote(): string {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return JSON.stringify({
      success: true,
      data: {
        messageHead: 'API is live and running',
        messageBody: quotes[randomIndex],
        httpStatus: 200,
      },
    });
  }
}
