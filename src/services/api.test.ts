import api from './api';
import { User } from './../stores/types';
import { ResponseUsers } from './api.types';

describe('GithubAPI', () => {
  describe('searchUsers', () => {
    it('returns an array of user objects', async () => {
      const params = { q: 'react' };
      const response = await api.searchUsers(params);
      const items = response.items;

      expect(Array.isArray(items)).toBe(true);

      expect(response).toMatchObject<ResponseUsers>({
        incomplete_results: expect.any(Boolean),
        items: expect.any(Array),
        total_count: expect.any(Number),
      });

      expect(items[0]).toMatchObject({
        login: expect.any(String),
        avatar_url: expect.any(String),
        repos_url: expect.any(String),
      });
    });
  });

  describe('getUserRepositoryList', () => {
    it('returns an array of user repos objects', async () => {
      const response = await api.getUserRepositoryList('ilhamhanif07');

      expect(Array.isArray(response)).toBe(true);

      expect(response[0]).toMatchObject({
        name: expect.any(String),
        stargazers_count: expect.any(Number),
        watchers: expect.any(Number),
      });
    });
  });
});
