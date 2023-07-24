import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Interfaces } from 'src/common/interfaces';
import { GithubService } from 'src/github/github.service';

@Injectable()
export class ReposService {
  constructor(private githubService: GithubService) {}

  async getRepoInfo(): Promise<Interfaces.RepositoryInfo> {
    try {
      const repo: Awaited<
        ReturnType<typeof this.githubService.getRepoInformation>
      > = await this.githubService.getRepoInformation();

      let page: number = 1,
        perPage: number = 50;
        
      let commits: Awaited<
        ReturnType<typeof this.githubService.getCommitsFromRepo>
      > = await this.githubService.getCommitsFromRepo(page, perPage);

      let hasData: boolean = false;
      let totalCommits: number = 0;

      if (commits.length > 0) {
        hasData = true;
      }

      while (hasData) {
        totalCommits += commits.length;
        page++;
        commits = await this.githubService.getCommitsFromRepo(page, perPage);
        if(commits.length == 0) {
            hasData = false;
        }
      }

      const repoInfo: Interfaces.RepositoryInfo = {
        createdAt: repo.created_at,
        repositoryName: repo.name,
        owner: repo.owner.login,
        description: repo.description,
        totalCommits
      }

      return repoInfo;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
