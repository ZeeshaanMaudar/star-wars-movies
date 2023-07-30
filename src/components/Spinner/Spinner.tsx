import React from 'react';
import { CircularProgress } from '@mui/material';

import { SpinnerContainer } from './styles';

export const Spinner = () => {
  return (
    <SpinnerContainer>
      <CircularProgress />
    </SpinnerContainer>
  );
};
