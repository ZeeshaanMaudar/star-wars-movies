import React, { FC, ReactNode } from 'react';
import { Container } from '@mui/material';

import { Title } from './styles';

type Props = {
    children: ReactNode
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <Container maxWidth="md">
      <Title variant='h2'>STAR WARS</Title>
      {children}
    </Container>
  );
}
