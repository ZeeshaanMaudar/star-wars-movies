export interface Movie {
  id: number;
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
