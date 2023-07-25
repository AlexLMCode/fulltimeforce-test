import { Module } from '@nestjs/common';
import { ReposController } from './repos.controller';
import { ReposService } from './repos.service';
import { GithubModule } from 'src/github/github.module';
import { DateFormatterModule } from 'src/date-formatter/date-formatter.module';

@Module({
  controllers: [ReposController],
  providers: [ReposService],
  imports: [GithubModule, DateFormatterModule]
})
export class ReposModule {}
