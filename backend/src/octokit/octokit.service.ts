import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Octokit } from 'octokit';

@Injectable()
export class OctokitService {
  private octokit: Octokit;

  constructor(private configService: ConfigService) {
    this.octokit = new Octokit({
      auth: this.configService.get('OCTOKIT_TOKEN'),
    });
  }

  async getRepo(owner: Required<string>, repo: Required<string>) {
    try {
      const result = await this.octokit.request('GET /repos/{owner}/{repo}', {
        owner,
        repo,
      });

      return result.data;
    } catch (error) {
        throw new Error(`Octokit failed -> ${error.message}`);
    }
  }
}
