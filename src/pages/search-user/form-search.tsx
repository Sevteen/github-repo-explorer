import { Button, debounce, Typography } from '@mui/material';
import Joi from 'joi';
import { FC, useEffect, useState } from 'react';
import { Form, TextInput } from '../../components/Form';
import useIsFirstRender from '../../hooks/useFirstRender';
import { api } from '../../services';
import { ParamsUsers } from '../../services/api.types';
import { DEFAULT_PARAMS } from '../../stores/constant';
import useUsersStore from '../../stores/users';
import { useStyles, WrapperForm } from './style';

const schema = Joi.object({
  q: Joi.string().allow(''),
});

export const FormSearch = () => {
  const classes = useStyles();
  const isFirstRender = useIsFirstRender();
  const { query, users, setUsers, setQuery, setBusy } = useUsersStore();

  const fetchUsers = async (params: ParamsUsers) => {
    const options = { ...DEFAULT_PARAMS, ...params };
    try {
      setBusy(true);
      const res = await api.searchUsers(options);
      if (res) {
        setUsers(res);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setBusy(false);
    }
  };

  const onSubmit = async (data: ParamsUsers) => {
    fetchUsers(data);
    setQuery(data);
  };

  const debounceSearch = debounce(onSubmit, 500);

  useEffect(() => {
    if (!isFirstRender) {
      fetchUsers(query);
      window.scrollTo(0, 0);
    }
  }, [query]);

  const renderResults = () => {
    if (!query.q) return null;

    return (
      <Typography variant="caption" fontFamily={'inherit'}>
        Found {users.total_count} results for `{query.q}`
      </Typography>
    );
  };

  return (
    <>
      <WrapperForm>
        <span className={classes.smallText}>Enter developer name below</span>
        <Form schema={schema} onSubmit={debounceSearch} className={classes.formWrap}>
          <TextInput fullWidth name="q" label="" placeholder="ex: hanif" size="small" className={classes.textInput} />
          <Button variant="contained" color="primary" type="submit" className={classes.buttonSubmit}>
            Search
          </Button>
        </Form>
        {renderResults()}
      </WrapperForm>
    </>
  );
};
