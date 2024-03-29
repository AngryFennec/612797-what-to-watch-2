import React from "react";
import MainPage from "../main-page/main-page.jsx";
import PropTypes from 'prop-types';

const App = (props) => {
  const {films} = props;
  return <MainPage
    films = {films}
  />;
};

App.propTypes = {
  films: PropTypes.arrayOf(PropTypes.exact({
    title: PropTypes.string,
    img: PropTypes.string,
    src: PropTypes.string,
    genre: PropTypes.string
  })).isRequired
};

export default App;
