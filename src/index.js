import React from "react";
import ReactDOM from "react-dom";
import App from './components/app/app.jsx';

const init = () => {
  const titles = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`, `Yet another movie`];
  const onTitleClick = () => {};

  ReactDOM.render(
      <App
        titles = {titles}
        onTitleClick = {onTitleClick}
      />,
      document.querySelector(`#root`)
  );
};

init();
