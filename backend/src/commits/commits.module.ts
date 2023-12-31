import { Module } from '@nestjs/common';
import { CommitsController } from './commits.controller';
import { CommitsService } from './commits.service';
import { GithubModule } from 'src/github/github.module';
import { DateFormatterModule } from 'src/date-formatter/date-formatter.module';

@Module({
  controllers: [CommitsController],
  providers: [CommitsService],
  imports: [GithubModule, DateFormatterModule]
})
export class CommitsModule {}
