import { styled, List, ListItem, Box } from '@mui/material';

export const Wrapper = styled(Box)`
  border-top: 2px solid #eee;
  padding-top: 10px;
`;

export const ListWrapper = styled(List)`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
`;

export const ListItemStyled = styled(ListItem)`
  width: 100%;
  flex: 0 0 100%;
  max-width: 100%;

  @media (min-width: 750px) {
    flex: 0 0 calc(100% / 2);
    max-width: calc(100% / 2);
  }

  @media (min-width: 950px) {
    flex: 0 0 calc(100% / 3);
    max-width: calc(100% / 3);
  }
`;
