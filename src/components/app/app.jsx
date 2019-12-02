import React from "react";
import MainPage from "../main-page/main-page.jsx";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const App = (props) => {
  const {filteredFilms} = props;
  console.log(filteredFilms);
  return <MainPage
    films = {filteredFilms}
  />;
};

App.propTypes = {
  filteredFilms: PropTypes.arrayOf(PropTypes.exact({
    title: PropTypes.string,
    img: PropTypes.string,
    src: PropTypes.string,
    genre: PropTypes.string
  })).isRequired
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  filteredFilms: state.filteredFilms
});

export default connect(mapStateToProps)(App);
