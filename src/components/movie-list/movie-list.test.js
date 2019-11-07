import React from 'react';
import MovieList from './movie-list.jsx';
import renderer from 'react-test-renderer';

const films = [
  {
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
  }
];

it(`MovieList component renders correctly`, () => {
  const tree = renderer
    .create(<MovieList
      films={films}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
