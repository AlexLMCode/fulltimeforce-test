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
              commitHash: commit.sha,
              commitTitle: commit.commit.message,
              commitUser: {
                username: commit.author.login,
                userImageUrl:  commit.committer.avatar_url
              },
              date: commit.commit.committer.date,
              filesCommited: 0,
            };

            const { files } = await this.githubService.getCommitByRef(customCommit.commitHash);

            customCommit.filesCommited = files.length;

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
