import React from 'react';
import { Typography } from '@mui/material';

import { Wrapper } from './styles';

export const ErrorPage = () => {

  return (
    <Wrapper>
      <Typography variant='h3'>Oops!</Typography>
      <Typography>Sorry, an unexpected error has occurred.</Typography>
    </Wrapper>
  );
}
