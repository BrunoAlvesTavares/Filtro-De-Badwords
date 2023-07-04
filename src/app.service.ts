import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  badwords = ['idiot', 'Gandalf', 'Bilbo'];

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
