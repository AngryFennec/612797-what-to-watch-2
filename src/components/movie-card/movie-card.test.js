import React from 'react';
import MovieCard from './movie-card.jsx';
import renderer from 'react-test-renderer';

it(`MovieCard component renders correctly`, () => {
  const tree = renderer
    .create(<MovieCard
      title = {`title`}
      id = {`0`}
      onTitleClick = {jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
