import { Controller, Get, HttpCode, HttpStatus, Query } from '@nestjs/common';
import { CommitsService } from './commits.service';

@Controller('commits')
export class CommitsController {
    constructor(private commitsService: CommitsService) {}

    @HttpCode(HttpStatus.OK)
    @Get()
    async getCommits(@Query('page') page: number, @Query('perPage') perPage: number) {
        return await this.commitsService.getCommits(isNaN(page) ? 1 : page, isNaN(perPage) ? 30 : perPage);
    }
}
