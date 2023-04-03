import { Container } from '@mui/material';
import { FC, lazy } from 'react';
import { Pagination } from '../../components/Pagination/Pagination';
import { useStyles } from './style';

const FormSearch = lazy(() => import('./form-search').then((module) => ({ default: module.FormSearch })));
const RepositoryList = lazy(() => import('./RepositoryList'));

export const Users: FC<FormSearchProps> = () => {
  const classes = useStyles();

  return (
    <Container className={`${classes.container} bg-white rounded-lg`} maxWidth="lg">
      <div className={`${classes.headWrap}`}>
        <div className={classes.mainText}>GitHub Explorer</div>
        <div className={classes.secondaryText}>Your site to find github users quickly and easily!</div>
      </div>
      <FormSearch />
      <RepositoryList />
    </Container>
  );
};
