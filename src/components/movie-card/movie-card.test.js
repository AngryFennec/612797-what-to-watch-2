import React from 'react';
import MovieCard from './movie-card.jsx';
import renderer from 'react-test-renderer';

const film = {
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
};

it(`MovieCard component renders correctly`, () => {
  const tree = renderer
    .create(<MovieCard
      film={film}
      id={0}
      onCardHover = {jest.fn()}
      onCardLeave = {jest.fn()}
      isPlaying = {true}
      changeActiveItemHandler = {jest.fn()}
    />,
    {
      createNodeMock: () => {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
