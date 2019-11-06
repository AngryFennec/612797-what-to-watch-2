import React from 'react';
import MovieCard from './movie-card.jsx';
import renderer from 'react-test-renderer';

const film = {
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
};

it(`MovieCard component renders correctly`, () => {
  const tree = renderer
    .create(<MovieCard
      film = {film}
      id = {`0`}
      onCardHover = {jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
