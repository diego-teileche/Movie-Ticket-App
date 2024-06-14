import {API_KEY, API_MOVIE_URL, API_IMAGE_URL} from '@env';

export const baseImagePath = (size: string, path: string) => {
  return `${API_IMAGE_URL}/${size}/${path}`;
};

export const nowPlayingMovies: string = `${API_MOVIE_URL}/movie/now_playing?api_key=${API_KEY}`;

export const upcomingMovies: string = `${API_MOVIE_URL}/movie/upcoming?api_key=${API_KEY}`;

export const popularMovies: string = `${API_MOVIE_URL}/movie/popular?api_key=${API_KEY}`;

export const searchMovies = (keyword: string) => {
  return `${API_MOVIE_URL}/search/movie?api_key=${API_KEY}&query=${keyword}`;
};

export const movieDetails = (id: number) => {
  return `${API_MOVIE_URL}/movie/${id}?api_key=${API_KEY}`;
};

export const movieCastDetails = (id: number) => {
  return `${API_MOVIE_URL}/movie/${id}/credits?api_key=${API_KEY}`;
};
