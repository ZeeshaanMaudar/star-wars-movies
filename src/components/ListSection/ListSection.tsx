import React, { FC } from 'react';
import { Typography } from '@mui/material';

import { ListSectionProps } from './types';
import { Wrapper, ListWrapper, ListItemStyled } from './styles';

export const ListSection: FC<ListSectionProps> = ({ label, list }) => {
  return (
    <Wrapper>
      <Typography variant='h6'>{label}</Typography>
      <ListWrapper>
        {list?.map((item) => {
          return (
            <ListItemStyled sx={{ display: 'list-item', listStyleType: 'disc',  pl: 0 }} key={item}>
              <Typography>{item}</Typography>
            </ListItemStyled>
          );
        })}
      </ListWrapper>
    </Wrapper>
  );
};
