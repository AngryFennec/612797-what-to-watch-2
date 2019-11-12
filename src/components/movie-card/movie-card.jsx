import React from "react";
import PropTypes from 'prop-types';
import VideoPlayer from '../video-player/video-player.jsx';

const MovieCard = (props) => {
  const {film, id, onCardHover, onCardLeave, isPlaying} = props;

  return (<article
    className="small-movie-card catalog__movies-card"
    id={id}
    onMouseEnter={() => {
      onCardHover(id);
      console.log("hover " + id);
    }}
    onMouseLeave={() => {
      onCardLeave();
    }}
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
  film: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  onCardHover: PropTypes.func.isRequired
};

export default MovieCard;
