import React from 'react';
import { useParams } from 'react-router-dom';

export const MovieDetailsPage = () => {
  const params = useParams();

  console.log('params 333: ', params);
  return <div>Movie Details Page</div>;
};
