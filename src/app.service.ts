import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  badwords = ['badword1', 'badword2', 'badword3'];

  applyBadwordFilter(text: string): string {
    for (const badword of this.badwords) {
      text = text.replace(badword, '*'.repeat(badword.length));
    }
    return text;
  }

  getHello(): string {
    return 'Hello World!';
  }
}
