import { FC } from "react";
import { IMovieItem } from "../types";
import { MovieItem } from "./MovieItem/MovieItem";
import '../'

interface MovieListProps {
  movies: IMovieItem[];
}

export const MovieList: FC<MovieListProps> = ({ movies }) => {
  return (
    <>
      <div className="MovieItemsList">
        {movies.map((movie) => (
          <MovieItem key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </>
  );
};
