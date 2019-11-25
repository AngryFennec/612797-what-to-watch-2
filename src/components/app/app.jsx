import React from "react";
import MainPage from "../main-page/main-page.jsx";
import PropTypes from 'prop-types';

const getPageScreen = (films) => {
    switch(location.pathname) {
        case `/`:
            return
              <MainPage
                films={films}
              />;
        case `/films/:id`:
            console.log(location);
    }
}

const App = (props) => {
  const {films} = props;
  return <React.Fragment>{getPageScreen(films)}</React.Fragment>;
}


App.propTypes = {
  films: PropTypes.arrayOf(PropTypes.exact({
    title: PropTypes.string,
    img: PropTypes.string,
    src: PropTypes.string,
    genre: PropTypes.string
  })).isRequired
};

export default App;
