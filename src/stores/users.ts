import { create } from 'zustand';
import { ParamsUsers, ResponseUsers } from '../services/api.types';
import { DEFAULT_PARAMS, USER_DATA } from './constant';
import { UsersStores } from './types';

const useUsersStore = create<UsersStores>()((set) => ({
  query: DEFAULT_PARAMS as ParamsUsers,
  busy: false as boolean,
  users: USER_DATA as ResponseUsers,
  setUsers: (users: ResponseUsers) => {
    set({ users });
  },
  setBusy: (bool: boolean) => {
    set({ busy: bool });
  },
  setQuery: (params: ParamsUsers) => {
    set({ query: params });
  },
}));

export default useUsersStore;
