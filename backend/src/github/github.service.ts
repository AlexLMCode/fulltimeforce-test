import { Injectable } from '@nestjs/common';
import { OctokitService } from 'nestjs-octokit';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GithubService {
    constructor(private octokitService: OctokitService, private configService: ConfigService) {}

    async getCommitsFromRepo(): Promise<any[]> {
        try {
            const request = await this.octokitService.request('GET /repos/{owner}/{repo}/commits', {
                owner: this.configService.get<string>('OWNER_NAME'),
                repo: this.configService.get<string>('REPOSITORY_NAME')
            })

            return request.data;
        } catch (error) {
            throw new Error(`Octokit service error: ${error.message}`);
        }
    }
}
