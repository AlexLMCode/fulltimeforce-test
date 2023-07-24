import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { GithubService } from 'src/github/github.service';
import { Interfaces } from '../common/interfaces';

@Injectable()
export class CommitsService {
  constructor(private githubService: GithubService) {}

  async getCommits() {
    try {
      const response: Interfaces.FullCommitStructure[] =
        await this.githubService.getCommitsFromRepo();

      let mappedCommits: Interfaces.CustomCommit[] = [];

      if (response.length > 0) {
        mappedCommits = await Promise.all(
          response.map(async (commit) => {
            const customCommit: Interfaces.CustomCommit = {
              sha: commit.sha,
              message: commit.commit.message,
              username: commit.author.login,
              date: commit.commit.committer.date,
              avatar: commit.committer.avatar_url,
              files: 0,
            };

            const { files } = await this.githubService.getCommitByRef(customCommit.sha);

            customCommit.files = files.length;

            return customCommit;
          }),
        );
      }

      return mappedCommits;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
