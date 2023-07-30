export interface Movie {
  movieId: number;
  episodeId: number;
  title: string;
  url: string;
  director: string;
  description: string;
  releaseDate: string;
}

export enum Order {
	ASC = 'asc',
	DESC = 'desc',
}

export interface MovieDetails {
  title: string;
  episodeId: number;
  description: string;
  director: string;
  producer: string;
  releaseDate: string;
  characters: string[];
  planets: string[];
  species: string[];
}
