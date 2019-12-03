import React from "react";
import MovieCard from "../movie-card/movie-card.jsx";
import PropTypes from 'prop-types';
import withActiveItem from "../../hocs/with-active-item.js";

const MovieList = (props) => {
  const {
    films,
    activeItem,
    onChangeActiveItem
  } = props;

  let timer;

  const movieCardHoverHandler = (id) => {
    timer = setTimeout(() => {
      onChangeActiveItem(id);
    }, 1000);
  };

  const movieCardLeaveHandler = () => {
    onChangeActiveItem(-1);
    clearTimeout(timer);
  };

  return (<React.Fragment > {
    films.map(
        (film, i) => < MovieCard
          film = {film}
          id = {i}
          key = {`${film.name}-${i}`}
          onCardHover = {movieCardHoverHandler}
          onCardLeave = {movieCardLeaveHandler}
          isPlaying={i === activeItem}
          changeActiveItemHandler={onChangeActiveItem}
        />)
  } </React.Fragment>);
};

MovieList.propTypes = {
  films: PropTypes.array.isRequired,
  activeItem: PropTypes.number.isRequired,
  onChangeActiveItem: PropTypes.func.isRequired
};


export default withActiveItem(MovieList);
