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
      films
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
          />)
    } </React.Fragment>);
  }

  _movieCardHoverHandler(id) {

    this.timer = setTimeout(() => {
      this.setState({activeCard: id});
    }, 1000);
  }

  _movieCardLeaveHandler() {
    this.setState({
      activeCard: -1,
    });
    clearTimeout(this.timer);
  }
}

MovieList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default MovieList;
