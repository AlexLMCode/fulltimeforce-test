import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { Environment } from './config';
import { OctokitModule } from './octokit/octokit.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: Environment.EnvValidation.validate,
    }),
    OctokitModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
