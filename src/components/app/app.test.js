import React from 'react';
import App from './app.jsx';
import {Provider} from "react-redux";
import {createStore} from "redux";
import renderer from 'react-test-renderer';

const films = [
  {
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    genre: `action`
  }
];

const store = createStore(() => ({
  genre: `All genre`,
  filteredFilms: []
}));

it(`App component renders correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <App
            films = {films}
          />,
        </Provider>,
        {
          createNodeMock: () => {
            return {};
          }
        })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
