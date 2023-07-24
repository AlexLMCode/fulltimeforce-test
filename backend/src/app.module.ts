import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Environment } from './config';
import { OctokitModule } from 'nestjs-octokit';
import { CommitsModule } from './commits/commits.module';
import { GithubModule } from './github/github.module';
import { ReposModule } from './repos/repos.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: Environment.EnvValidation.validate,
    }),
    OctokitModule.forRootAsync({
      isGlobal: true,
      imports: [ConfigModule],
      inject: [ConfigService],
      async useFactory(configService: ConfigService) {
        return  {
          octokitOptions: {
            auth: configService.get<string>('OCTOKIT_TOKEN')
          }
        } 
      }
    }),
    CommitsModule,
    GithubModule,
    ReposModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
