import React from "react";
import MainPage from "../main-page/main-page.jsx";
import PropTypes from 'prop-types';

const App = (props) => {
  const {titles, onTitleClick} = props;
  return <MainPage
    titles = {titles}
    onTitleClick = {onTitleClick}
  />;
};

App.propTypes = {
  titles: PropTypes.arrayOf(PropTypes.string).isRequired,
  onTitleClick: PropTypes.func.isRequired
};

export default App;
