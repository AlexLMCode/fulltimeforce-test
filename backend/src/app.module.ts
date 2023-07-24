import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { Environment } from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: Environment.EnvValidation.validate,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
