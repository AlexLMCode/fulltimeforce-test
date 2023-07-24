import { Module, Global } from '@nestjs/common';
import { OctokitService } from './octokit.service';

@Global()
@Module({
  providers: [OctokitService],
})
export class OctokitModule {}
