import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { OctokitService } from 'nestjs-octokit';
import { GithubService } from 'src/github/github.service';

@Injectable()
export class CommitsService {
  constructor(private githubService: GithubService) {}

  async getCommits() {
    try {
        const response = await this.githubService.getCommitsFromRepo();

        return response;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
