import React from "react";
import ReactDOM from "react-dom";
import App from './components/app/app.jsx';
import films from './mocks/films.js';

const init = () => {
  const onTitleClick = () => {};

  ReactDOM.render(
      <App
        titles = {films}
        onTitleClick = {onTitleClick}
      />,
      document.querySelector(`#root`)
  );
};

init();
