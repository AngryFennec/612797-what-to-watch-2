import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import App from './components/app/app.jsx';
import films from './mocks/films.js';
import {reducer} from "./reducer.js";

const init = (mockFilms) => {

  const store = createStore(reducer);

  ReactDOM.render(
      <Provider store={store}>
        <App
          films={mockFilms}
        />
      </Provider>,
      document.querySelector(`#root`)
  );
};

init(films);
