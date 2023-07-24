import { Module } from '@nestjs/common';
import { ReposController } from './repos.controller';
import { ReposService } from './repos.service';
import { GithubModule } from 'src/github/github.module';

@Module({
  controllers: [ReposController],
  providers: [ReposService],
  imports: [GithubModule]
})
export class ReposModule {}
