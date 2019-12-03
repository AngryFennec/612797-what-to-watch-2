import React from 'react';
import {Provider} from "react-redux";
import {createStore} from "redux";
import MainPage from './main-page.jsx';
import renderer from 'react-test-renderer';
import reducer from "../../reducers/reducer.js";

const films = [
  {
    id: 1,
    name: `The Grand Budapest Hotel`,
    posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
    previewImage: `img/the-grand-budapest-hotel.jpg`,
    backgroundImage: `img/the-grand-budapest-hotel-bg.jpg`,
    backgroundColor: `#ffffff`,
    videoLink: `https://some-link`,
    previewVideoLink: `https://some-link`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    rating: 8.9,
    scoresCount: 240,
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
    runTime: 99,
    genre: `Comedy`,
    released: 2014,
    isFavorite: false,
  }
];

const store = createStore(reducer);

it(`MainPage component renders correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <MainPage
            films = {films}
            activeGenre = {``}
            onGenreClick = {jest.fn()}
          />
        </Provider>,
        {
          createNodeMock: () => {
            return {};
          }
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});
