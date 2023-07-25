import { Controller, Get, HttpCode, HttpStatus, Query } from '@nestjs/common';
import { CommitsService } from './commits.service';
import { ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('Commits')
@Controller('commits')
export class CommitsController {
    constructor(private commitsService: CommitsService) {}

    @ApiQuery({ name:'page', required: true, type: Number })
    @ApiQuery({ name:'perPage', required: true, type: Number })
    @HttpCode(HttpStatus.OK)
    @Get()
    async getCommits(@Query('page') page: number, @Query('perPage') perPage: number) {
        return await this.commitsService.getCommits(isNaN(page) ? 1 : page, isNaN(perPage) ? 30 : perPage);
    }
}
