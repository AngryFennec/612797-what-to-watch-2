import React from 'react';
import MovieList from './movie-list.jsx';
import renderer from 'react-test-renderer';

const titles = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`, `Yet another movie`];

it(`MovieList component renders correctly`, () => {
  const tree = renderer
    .create(<MovieList
      titles = {titles}
      onTitleClick = {jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
