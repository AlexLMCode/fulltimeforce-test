import { Controller, Get } from '@nestjs/common';
import { ReposService } from './repos.service';
import { Interfaces } from 'src/common/interfaces';

@Controller('repos')
export class ReposController {
    constructor(private repoService: ReposService) {}

    @Get('/info')
    async getRepoInfo(): Promise<Interfaces.RepositoryInfo> {
        return this.repoService.getRepoInfo();
    }
}
