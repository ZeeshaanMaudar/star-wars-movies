import React, { FC } from 'react';

import { ListSectionProps } from './types';
import { ListWrapper, ListItemStyled } from './styles';

export const ListSection: FC<ListSectionProps> = ({ label, list }) => {
  return (
    <div>
      <h4>Characters</h4>
      <ListWrapper>
        {list?.map((item) => {
          return (
            <ListItemStyled sx={{ display: 'list-item', listStyleType: 'disc',  pl: 1 }} key={item}>{item}</ListItemStyled>
          );
        })}
      </ListWrapper>
    </div>
  );
};
