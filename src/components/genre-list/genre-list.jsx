import React from "react";
const GenreList = (props) => {
  const {genres, films, activeGenre, onGenreClick} = props;
  return (
    <ul className="catalog__genres-list">
      {genres.map((genre, i) =>
        <li
          key={genre}
          className={`catalog__genres-item ${genre === activeGenre ? `catalog__genres-item--active` : ``}`}>
          <a href="#" className="catalog__genres-link" onClick={(evt) => onGenreClick(evt, films, genre)}>{genre}</a>
        </li>
      )}
    </ul>
  )
}

export default GenreList;
