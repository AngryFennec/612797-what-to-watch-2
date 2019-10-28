import React from "react";
import MovieCard from "../movie-card/movie-card.jsx";
import PropTypes from 'prop-types';

const MovieList = (props) => {
  const {titles, onTitleClick} = props;
  return (
    <React.Fragment>
      {titles.map(
          (title, i) => <MovieCard title = {title} id={`${title}-${i}`} key={`${title}-${i}`} onTitleClick={onTitleClick}/>
      )}
    </React.Fragment>);
};

MovieList.propTypes = {
  titles: PropTypes.arrayOf(PropTypes.string).isRequired,
  onTitleClick: PropTypes.func.isRequired
};

export default MovieList;
