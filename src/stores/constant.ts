import { ResponseUsers } from '../services/api.types';
import { User } from './types';

export const USER_DATA = {
  total_count: 0,
  items: [],
  incomplete_results: false,
};

export const DEFAULT_PARAMS = {
  q: '',
  per_page: 10,
  page: 1,
};
