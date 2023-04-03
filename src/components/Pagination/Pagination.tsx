import Stack from '@mui/material/Stack';
import { ArrowBack, ArrowForward } from '@material-ui/icons';
import { MenuItem, Select, PaginationItem, Pagination as Paging } from '@mui/material';
import { makeStyles } from '@material-ui/core';
import { FC, useState } from 'react';
import { PaginationPropsType } from './Pagination.types';

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing(0, 2),
  },
  select: {
    marginLeft: theme.spacing(2),
  },
}));

export const Pagination: FC<PaginationPropsType> = ({ totalCount, onChangePage, onPageSizeChange }) => {
  const classes = useStyles();

  const [pageSize, setPageSize] = useState(10);
  const [page, setPage] = useState(1);

  const handlePageSizeChanged = (event) => {
    const newPageSize = parseInt(event.target.value, 10);
    setPageSize(newPageSize);
    onPageSizeChange(totalCount, newPageSize);
  };

  const handlePageChanged = (total, page) => {
    setPage(page);
    onChangePage(total, page);
  };

  return (
    <Stack spacing={2} className={`${classes.root} d-flex flex-row align-items-center justify-content-end w-100`}>
      <Select className={classes.select} value={pageSize} onChange={handlePageSizeChanged} size="small">
        {[10, 25, 50, 100].map((option) => (
          <MenuItem key={option} value={option}>
            {`${option} rows`}
          </MenuItem>
        ))}
      </Select>

      <Paging
        count={Math.ceil(totalCount / pageSize)}
        onChange={handlePageChanged}
        page={page}
        showFirstButton
        showLastButton
        renderItem={(item) => <PaginationItem slots={{ previous: ArrowBack, next: ArrowForward }} {...item} />}
        className="m-0"
      />
    </Stack>
  );
};
