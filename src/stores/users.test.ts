import { ResponseUsers } from '../services/api.types';
import { DEFAULT_PARAMS, USER_DATA } from './constant';
import useUsersStore from './users';

// Mock data for the setUsers action
const mockUsers: ResponseUsers = {
  incomplete_results: false,
  items: [
    {
      login: 'nelsonic',
      id: 194400,
      node_id: 'MDQ6VXNlcjE5NDQwMA==',
      avatar_url: 'https://avatars.githubusercontent.com/u/194400?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/nelsonic',
      html_url: 'https://github.com/nelsonic',
      followers_url: 'https://api.github.com/users/nelsonic/followers',
      following_url: 'https://api.github.com/users/nelsonic/following{/other_user}',
      gists_url: 'https://api.github.com/users/nelsonic/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/nelsonic/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/nelsonic/subscriptions',
      organizations_url: 'https://api.github.com/users/nelsonic/orgs',
      repos_url: 'https://api.github.com/users/nelsonic/repos',
      events_url: 'https://api.github.com/users/nelsonic/events{/privacy}',
      received_events_url: 'https://api.github.com/users/nelsonic/received_events',
      type: 'User',
      site_admin: false,
      score: 1.0,
    },
    {
      login: 'qyuhen',
      id: 465305,
      node_id: 'MDQ6VXNlcjQ2NTMwNQ==',
      avatar_url: 'https://avatars.githubusercontent.com/u/465305?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/qyuhen',
      html_url: 'https://github.com/qyuhen',
      followers_url: 'https://api.github.com/users/qyuhen/followers',
      following_url: 'https://api.github.com/users/qyuhen/following{/other_user}',
      gists_url: 'https://api.github.com/users/qyuhen/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/qyuhen/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/qyuhen/subscriptions',
      organizations_url: 'https://api.github.com/users/qyuhen/orgs',
      repos_url: 'https://api.github.com/users/qyuhen/repos',
      events_url: 'https://api.github.com/users/qyuhen/events{/privacy}',
      received_events_url: 'https://api.github.com/users/qyuhen/received_events',
      type: 'User',
      site_admin: false,
      score: 1.0,
    },
  ],
  total_count: 2,
};

describe('useUsersStore', () => {
  it('should initialize with default values', () => {
    const { query, busy, users, setUsers, setBusy, setQuery } = useUsersStore.getState();

    expect(query).toEqual(DEFAULT_PARAMS);
    expect(busy).toBe(false);
    expect(users).toEqual(USER_DATA);

    setUsers(mockUsers);
    setBusy(true);
    setQuery({ q: 'test' });

    const { users: updatedUsers, busy: updatedBusy, query: updatedQuery } = useUsersStore.getState();
    expect(updatedUsers).toEqual(mockUsers);
    expect(updatedBusy).toBe(true);
    expect(updatedQuery).toEqual({ q: 'test' });
  });
});
