import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import {Logger} from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const configService = app.get(ConfigService)
  const PORT = configService.get('PORT');

  await app.listen(PORT || 3000);
  Logger.log(`Server listening in PORT: ${PORT}`);
}
bootstrap();
