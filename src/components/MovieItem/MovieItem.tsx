import { FC } from "react";
import "./MovieItem.scss";
import { IMovieItem } from "../../types";

export const MovieItem: FC<IMovieItem> = ({ Poster, Title, Type, Year }) => {
  return (
    <>
      <div key={Title} className={"MovieItem"}>
        <div className="image">
          <img src={Poster} alt={Title} />
        </div>
        <h2>{Title}</h2>
        <span>
          {Type}
          <b>{Year}</b>
        </span>
      </div>
    </>
  );
};
