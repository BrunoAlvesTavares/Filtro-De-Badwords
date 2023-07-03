import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/filtro-badwords')
  filtroBadwords(@Body('text') text: string): { filtered_text: string } {
    const filteredText = this.appService.applyBadwordFilter(text);
    return { filtered_text: filteredText };
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
