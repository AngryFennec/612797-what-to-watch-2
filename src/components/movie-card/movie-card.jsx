import React from "react";
import PropTypes from 'prop-types';

const MovieCard = (props) => {
  const {film, id, onCardHover} = props;

  return (<article
    className="small-movie-card catalog__movies-card"
    id={id}
    onMouseEnter={() => {
      onCardHover(id);
    }}>
    <div className="small-movie-card__image">
      <img src={film.img} alt={film.title} width="280" height="175" />
    </div>
    <h3 className="small-movie-card__title">
      <a className="small-movie-card__link" href="#">{film.title}</a>
    </h3>
  </article>);
};


MovieCard.propTypes = {
  film: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  onCardHover: PropTypes.func.isRequired
};

export default MovieCard;
