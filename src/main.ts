import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config(); // Carrega as variáveis de ambiente do arquivo .env

  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000; // Lê a porta do arquivo .env ou usa 3000 como padrão
  await app.listen(port);
}
bootstrap();
