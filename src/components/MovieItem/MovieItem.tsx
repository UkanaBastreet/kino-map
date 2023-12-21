import { FC } from "react";
import "./MovieItem.scss";
import { IMovieItem } from "../../types";

interface MovieItemProps {
  movie: IMovieItem;
}

export const MovieItem: FC<MovieItemProps> = ({ movie }) => {
  return (
    <>
      <div key={movie.Title} className={"MovieItem"}>
        <div className="image">
          <img src={movie.Poster} alt={movie.Title} />
        </div>
        <div className="info">
          <h2 title={movie.Title} className="MovieTitle" >{movie.Title}</h2>
          <span>
            {movie.Type}
            <b>{movie.Year}</b>
          </span>
        </div>
      </div>
    </>
  );
};
