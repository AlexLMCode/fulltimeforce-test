import { Controller, Get } from '@nestjs/common';
import { ReposService } from './repos.service';

@Controller('repos')
export class ReposController {
    constructor(private repoService: ReposService) {}

    @Get('/info')
    async getRepoInfo() {
        return this.repoService.getRepoInfo();
    }
}
