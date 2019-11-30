import React from "react";
import PropTypes from 'prop-types';
import withActiveItem from "../../hocs/with-active-item.js";

const GenreList = (props) => {
  const {genres, activeItem = -1, onGenreClick, onChangeActiveItem = ()=>{}} = props;
  return (
    <ul className="catalog__genres-list">
      {genres.map((genre, i) =>
        <li
          key={genre}
          className={`catalog__genres-item ${activeItem === i ? `catalog__genres-item--active` : ``}`}>
          <a href="#" className="catalog__genres-link" onClick={(evt) => {
            evt.preventDefault();
            onChangeActiveItem(i);
            onGenreClick(genre);
          }
          }>{genre}</a>
        </li>
      )}
    </ul>
  );
};

GenreList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeItem: PropTypes.number.isRequired,
  onGenreClick: PropTypes.func.isRequired,
  onChangeActiveItem: PropTypes.func.isRequired,
};

export default withActiveItem(GenreList);
