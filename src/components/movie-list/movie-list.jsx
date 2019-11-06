import React from "react";
import MovieCard from "../movie-card/movie-card.jsx";
import PropTypes from 'prop-types';

class MovieList extends React.PureComponent {
      constructor(props) {
        super(props);
        this.state = {
          activeCard: null
        };
      }

      render() {
        const {films} = this.props;

    return (
      <React.Fragment>
        {films.map(
            (film, i) => <MovieCard
              film = {film}
              id={`${film.title}-${i}`}
              key={`${film.title}-${i}`}
              onCardHover={this._movieCardHoverHandler}/>
        )}
      </React.Fragment>);
    }

    _movieCardHoverHandler (card) {
      this.setState({
        activeCard: card
      });
    }




  };

  MovieList.propTypes = {
    films: PropTypes.arrayOf(PropTypes.object).isRequired
  };
export default MovieList;
