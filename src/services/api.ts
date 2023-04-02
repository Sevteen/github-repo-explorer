import { Octokit } from '@octokit/rest';
import { UserRepos } from '../stores/types';
import { ParamsUsers, ResponseUsers } from './api.types';

const ACCESS_TOKEN = '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';

class GithubAPI {
  private octokit: Octokit;

  constructor(private readonly accessToken: string) {
    this.octokit = new Octokit({
      auth: accessToken,
    });
  }

  async getUserRepositoryList(username: string): Promise<UserRepos[]> {
    const response = await this.octokit.request(`GET /users/${username}/repos`);
    return response.data as UserRepos[];
  }

  async searchUsers(params: ParamsUsers): Promise<ResponseUsers> {
    const { q, order, page, per_page, sort } = params;
    const response = await this.octokit.search.users({
      q,
      order,
      page,
      per_page,
      sort,
    });

    return response.data as ResponseUsers;
  }
}

const api = new GithubAPI(ACCESS_TOKEN);

export default api;
