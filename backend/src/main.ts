import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import {Logger} from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

function configureSwagger(app, configService: ConfigService): void {
  const config = new DocumentBuilder()
    .setTitle(configService.get<string>('API_NAME'))
    .setDescription(configService.get<string>('API_DESCRIPTION'))
    .setVersion(configService.get<string>('API_VERSION'))
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/swagger', app, document);
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const configService = app.get(ConfigService)
  const PORT = configService.get('PORT');

  configureSwagger(app, configService);

  app.enableCors();
  await app.listen(PORT || 3000);
  Logger.log(`Server listening in PORT: ${PORT}`);
}
bootstrap();
