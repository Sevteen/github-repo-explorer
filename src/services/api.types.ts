import { User } from '../stores/types';

export type Repository = {
  name: string;
  full_name: string;
  description: string;
  created_at: string;
  updated_at: string;
  language: string;
};

export type ResponseUsers = {
  total_count: number;
  incomplete_results: boolean;
  items: User[];
};

export type ParamsUsers = {
  q: string;
  sort?: 'followers' | 'repositories' | 'joined' | undefined;
  order?: 'asc' | 'desc';
  per_page?: number;
  page?: number;
};
