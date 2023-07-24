import { Module } from '@nestjs/common';
import { CommitsController } from './commits.controller';
import { CommitsService } from './commits.service';
import { GithubModule } from 'src/github/github.module';

@Module({
  controllers: [CommitsController],
  providers: [CommitsService],
  imports: [GithubModule]
})
export class CommitsModule {}
