import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { GithubService } from 'src/github/github.service';

@Injectable()
export class ReposService {
    constructor(private githubService: GithubService) {}

    async getRepoInfo() {
        try {
            const response = await this.githubService.getRepoInformation();

            return response;
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }
}
