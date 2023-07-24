import { Injectable } from '@nestjs/common';
import { OctokitService } from 'nestjs-octokit';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GithubService {
    constructor(private octokitService: OctokitService, private configService: ConfigService) {}

    async getCommitsFromRepo(page: number = 1, per_page: number = 30): Promise<any[]> {
        try {
            const request = await this.octokitService.request('GET /repos/{owner}/{repo}/commits', {
                owner: this.configService.get<string>('OWNER_NAME'),
                repo: this.configService.get<string>('REPOSITORY_NAME'),
                page,
                per_page
            })

            return request.data;
        } catch (error) {
            throw new Error(`Octokit service error: ${error.message}`);
        }
    }

    async getCommitByRef(sha: string): Promise<any> {
        try {
            const request = await this.octokitService.request('GET /repos/{owner}/{repo}/commits/{ref}', {
                owner: this.configService.get<string>('OWNER_NAME'),
                repo: this.configService.get<string>('REPOSITORY_NAME'),
                ref: sha,
            })

            return request.data;
        } catch (error) {
            throw new Error(`Octokit service error: ${error.message}`);
        }
    }

    async getRepoInformation() {
        try {
            const request = await this.octokitService.request('GET /repos/{owner}/{repo}', {
                owner: this.configService.get<string>('OWNER_NAME'),
                repo: this.configService.get<string>('REPOSITORY_NAME'),
            })

            return request.data;
        } catch (error) {
            throw new Error(`Octokit service error: ${error.message}`);
        }
    }
}
