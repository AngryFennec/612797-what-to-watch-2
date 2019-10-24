import React from "react";
import ReactDOM from "react-dom";
import App from './components/app/app.jsx';

const init = () => {
  const titles = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`, `Yet another movie`];

  ReactDOM.render(
      <App
        titles = {titles}
      />,
      document.querySelector(`#root`)
  );
};

init();
