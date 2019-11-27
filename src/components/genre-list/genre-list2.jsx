import React from "react";
import PropTypes from 'prop-types';

class GenreList2 extends React.PureComponent {
  constructor(props) {
   super(props);
 }


render() {
  const {genres, activeGenre, onChangeActiveItem} = props;
  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) =>
        <li
          key={genre}
          className={`catalog__genres-item ${genre === activeGenre ? `catalog__genres-item--active` : ``}`}>
          <a href="#" className="catalog__genres-link" onClick={(evt) => {
            evt.preventDefault();
            onChangeActiveItem(genre);
          }
          }>{genre}</a>
        </li>
      )}
    </ul>
  );
}

};

GenreList2.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeGenre: PropTypes.string.isRequired,
  onChangeActiveItem: PropTypes.func.isRequired,
};

export default GenreList2;
