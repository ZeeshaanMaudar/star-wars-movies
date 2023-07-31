import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';

import {
  TableRow,
  TableCell,
  Collapse,
  IconButton,
} from '@mui/material';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import { Movie } from '../../shared/types';

import { CollapsibleTableCell, Description } from './styles';

interface MovieProps {
  movie: Movie
}

export const CollapsibleRow: FC<MovieProps> = ({ movie }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          <Link to={`/${movie.movieId}`} style={{ textDecoration: 'none' }}>
            {movie.title}
          </Link>
        </TableCell>
        <TableCell align="center">{movie.episodeId}</TableCell>
        <TableCell>{movie.director}</TableCell>
        <TableCell>{new Date(movie.releaseDate).toDateString()}</TableCell>
      </TableRow>
      <TableRow>
        <CollapsibleTableCell colSpan={5}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Description>{movie.description}</Description>
          </Collapse>
        </CollapsibleTableCell>
      </TableRow>
    </>
  );
};
