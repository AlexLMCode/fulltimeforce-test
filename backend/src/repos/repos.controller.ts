import { Controller, Get, HttpStatus, HttpCode } from '@nestjs/common';
import { ReposService } from './repos.service';
import { Interfaces } from 'src/common/interfaces';
import { ApiTags } from '@nestjs/swagger';

 @ApiTags('Repos')
@Controller('repos')
export class ReposController {
    constructor(private repoService: ReposService) {}

    @HttpCode(HttpStatus.OK)
    @Get('/info')
    async getRepoInfo(): Promise<Interfaces.RepositoryInfo> {
        return this.repoService.getRepoInfo();
    }
}
