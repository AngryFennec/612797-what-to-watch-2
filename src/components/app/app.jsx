import React from "react";
import MainPage from "../main-page/main-page.jsx";
import PropTypes from 'prop-types';

const App = (props) => {
  const titles = props;
  return <MainPage
    titles = {titles}
  />;
};

App.propTypes = {
  titles: PropTypes.arrayOf(PropTypes.string)
};

export default App;
