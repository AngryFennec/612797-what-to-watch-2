import React from 'react';
import GenreList from './genre-list.jsx';
import renderer from 'react-test-renderer';

const genres = [
  `action`,
  `shooter`
];


it(`GenreList component renders correctly`, () => {
  const tree = renderer
    .create(<GenreList
      genres={genres}
      activeGenre={``}
      onGenreClick={jest.fn()}
    />,
    {
      createNodeMock: () => {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
