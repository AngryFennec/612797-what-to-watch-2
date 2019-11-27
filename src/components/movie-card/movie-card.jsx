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
        img={film.img}
        src={film.src}
        isPlaying={isPlaying}
      />
    </div>
    <h3 className="small-movie-card__title">
      <a className="small-movie-card__link" href="#">{film.title}</a>
    </h3>
  </article>);
};


MovieCard.propTypes = {
  film: PropTypes.exact({
    title: PropTypes.string,
    img: PropTypes.string,
    src: PropTypes.string,
    genre: PropTypes.string,
  }).isRequired,
  id: PropTypes.number.isRequired,
  onCardHover: PropTypes.func.isRequired,
  onCardLeave: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired
};

export default MovieCard;
