import React from "react";
import MovieCard from "../movie-card/movie-card.jsx";
import PropTypes from 'prop-types';

class MovieList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: -1,
    };
  }

  render() {
    const {
      films,
      onChangeActiveItem
    } = this.props;
    return (<React.Fragment > {
      films.map(
          (film, i) => < MovieCard
            film = {film}
            id = {i}
            key = {`${film.title}-${i}`}
            onCardHover = {this._movieCardHoverHandler.bind(this)}
            onCardLeave = {this._movieCardLeaveHandler.bind(this)}
            isPlaying={i === this.state.activeCard}
            changeActiveItemHandler={onChangeActiveItem}
          />)
    } </React.Fragment>);
  }


  _movieCardHoverHandler(id, onChangeActiveItem) {
    this.timer = setTimeout(() => {
      onChangeActiveItem(id);
    }, 1000);
  }

  _movieCardLeaveHandler(onChangeActiveItem) {
    onChangeActiveItem(-1);
    clearTimeout(this.timer);
  }
}

MovieList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.exact({
    title: PropTypes.string,
    img: PropTypes.string,
    src: PropTypes.string,
    genre: PropTypes.string,
  })).isRequired,
  onChangeActiveItem: PropTypes.func.isRequired
};


export default MovieList;
