import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore, applyMiddleware, compose} from "redux";
import App from './components/app/app.jsx';
import films from './mocks/films.js';
import {reducer, Operation} from "./reducer.js";
import thunk from 'redux-thunk';
import {createAPI} from './api.js';


const init = (mockFilms) => {

  const api = createAPI((...args) => store.dispatch(...args));
  const store = createStore(
      reducer,
      compose(
          applyMiddleware(thunk.withExtraArgument(api)),
          window && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
      )
  );
  store.dispatch(Operation.loadFilms());

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
