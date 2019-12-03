import React from "react";
import PropTypes from 'prop-types';
import VideoPlayer from '../video-player/video-player.jsx';

const MovieCard = (props) => {
  const {film, id, onCardHover, onCardLeave, isPlaying, changeActiveItemHandler} = props;
  const cardMouseEnterHandler = () => {
    onCardHover(id, changeActiveItemHandler);
  };
  const cardMouseLeaveHandler = () => {
    onCardLeave(changeActiveItemHandler);
  };
  return (<article
    className="small-movie-card catalog__movies-card"
    id={id}
    onMouseEnter={cardMouseEnterHandler}
    onMouseLeave={cardMouseLeaveHandler}
  >
    <div className="small-movie-card__image">
      <VideoPlayer
        film={film}
        isPlaying={isPlaying}
      />
    </div>
    <h3 className="small-movie-card__title">
      <a className="small-movie-card__link" href="#">{film.name}</a>
    </h3>
  </article>);
};


MovieCard.propTypes = {
  film: PropTypes.object.isRequired,
  onCardHover: PropTypes.func.isRequired,
  onCardLeave: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  changeActiveItemHandler: PropTypes.func.isRequired,
};

export default MovieCard;
