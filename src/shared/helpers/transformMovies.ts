export const transformMovies = (moviesList: any[]) => {
  return moviesList.map((movie) => ({
    movieId: getMovieIdFromUrl(movie.url) as number,
    episodeId: movie.episode_id as number,
    title: movie.title as string,
    url: movie.url as string,
    director: movie.director as string,
    description: movie.opening_crawl as string,
    releaseDate: movie.release_date as string,
  }))
};

export const getMovieIdFromUrl = (url: string) => {
  return (
    Number(url
    .split('/')
    .filter(Boolean)
    .pop())
    );
};
