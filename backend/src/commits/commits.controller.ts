import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { CommitsService } from './commits.service';

@Controller('commits')
export class CommitsController {
    constructor(private commitsService: CommitsService) {}

    @HttpCode(HttpStatus.OK)
    @Get()
    async getCommits() {
        return await this.commitsService.getCommits()
    }
}
