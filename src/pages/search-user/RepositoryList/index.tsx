import { ExpandMore, Star, Visibility } from '@material-ui/icons';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Card,
  CardContent,
  Grid,
  Skeleton,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { CodeForkSVG } from '../../../assets/icons/code-fork';
import { Pagination } from '../../../components/Pagination/Pagination';
import { api } from '../../../services';
import useUsersStore from '../../../stores/users';
import { useStyles } from './style';

const RepositoryList = () => {
  const { busy, query, users, setUsers, setQuery, setBusy } = useUsersStore();
  const classes = useStyles();

  const [busyRepo, setBusyRepo] = useState<boolean>(false);

  const onClickDetails = async (user: string, idx: number) => {
    const exist = users.items.find((o) => o.login === user);
    if (exist && exist['repos']) return null;

    try {
      setBusyRepo(true);
      const res = await api.getUserRepositoryList(user);
      const newUsers = users;
      const item = newUsers.items[idx];
      if (!item['repos']) item['repos'] = [];
      item['repos'] = [...res];
      setUsers(newUsers);
    } catch (error) {
      console.log(error);
    } finally {
      setBusyRepo(false);
    }
  };

  const onView = (repoUrl: string) => {
    window.open(repoUrl, '_blank');
  };

  const onChangePage = (_, page) => {
    setQuery({ ...query, page });
  };

  const onPageSizeChange = (e, pageSize) => {
    setQuery({ ...query, per_page: pageSize });
  };

  const ShimmerRepo = () => {
    return (
      <>
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} variant="rounded" width={'100%'} height={72.5} />
          ))}
      </>
    );
  };

  const ShimmerUsers = () => {
    return (
      <div className="d-flex flex-column gap-md w-100">
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <div key={index} className="d-flex flex-row align-items-center w-100 gap-md">
              <Skeleton variant="rounded" width={50} height={50} />
              <Skeleton variant="rounded" width={'100%'} height={74.8} />
            </div>
          ))}
      </div>
    );
  };

  return (
    <Grid container className={classes.mainAccordion}>
      {busy ? (
        <ShimmerUsers />
      ) : (
        users.items.map((user, idx: number) => (
          <Grid item md={12} xs={12}>
            <Accordion
              disableGutters
              key={user.login}
              className={'shadow-none '}
              sx={{
                overflow: 'hidden',
                flexBasis: 'calc(50% - 0.5rem)', // Add this to make 2 columns for large screens
                marginBottom: '1rem', // Add margin bottom to create gap between the accordions
              }}
            >
              <AccordionSummary
                className={`border-bottom ${classes.accordionContentSummary}`}
                expandIcon={<ExpandMore />}
                onClick={() => onClickDetails(user.login, idx)}
              >
                <img src={user.avatar_url} className="img-fluid rounded" width={50} height={50} />
                <Typography className={classes.heading}>{user.login}</Typography>
              </AccordionSummary>
              <AccordionDetails className={`d-flex flex-column ${classes.accordionDetails}`}>
                {user['repos'] && !user['repos'].length ? <span>No Repositories</span> : null}
                {busyRepo && !user['repos'] ? (
                  <ShimmerRepo />
                ) : (
                  user['repos'] &&
                  user['repos'].map((repo, index) => (
                    <Card key={`${repo.name}-card-${index}`} className={`shadow-sm bg-light`}>
                      <CardContent className="p-3 d-flex justify-content-between position-relative">
                        <div className="d-flex flex-column flex-1 min-width-0 mr-3">
                          <span className="text-truncate font-size-lg font-weight-bold">{repo.name}</span>
                          <p className="text-truncate font-size-md ">{repo.description || 'No description'}</p>
                        </div>
                        <div className="d-flex flex-row gap-sm align-items-center gap-lg">
                          <Button
                            className={`${classes.githubColor}`}
                            type="button"
                            variant="contained"
                            onClick={() => onView(repo.html_url)}
                          >
                            View
                          </Button>
                          <div className="d-flex flex-column">
                            <div className="d-flex align-items-center gap-xs">
                              <span>{repo.watchers_count}</span>
                              <Visibility className="d-20" />
                            </div>
                            <div className="d-flex align-items-center gap-xs">
                              <span>{repo.forks_count}</span>
                              <CodeForkSVG className="d-20" />
                            </div>
                            <div className="d-flex align-items-center gap-xs">
                              <span>{repo.stargazers_count}</span>
                              <Star className="d-20" />
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                )}
              </AccordionDetails>
            </Accordion>
          </Grid>
        ))
      )}
      {users.total_count ? (
        <Pagination onChangePage={onChangePage} totalCount={users.total_count} onPageSizeChange={onPageSizeChange} />
      ) : null}
    </Grid>
  );
};

export default RepositoryList;
