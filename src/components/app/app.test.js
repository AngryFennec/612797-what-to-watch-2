import React from 'react';
import App from './app.jsx';
import {Provider} from "react-redux";
import {createStore} from "redux";
import renderer from 'react-test-renderer';
import reducer from "../../reducers/reducer.js";

const store = createStore(reducer);

it(`App component renders correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <App/>,
        </Provider>,
        {
          createNodeMock: () => {
            return {};
          }
        })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
