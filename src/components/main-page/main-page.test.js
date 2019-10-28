import React from 'react';
import MainPage from './main-page.jsx';
import renderer from 'react-test-renderer';

const titles = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`, `Yet another movie`];

it(`MainPage component renders correctly`, () => {
  const tree = renderer
    .create(<MainPage
      titles = {titles}
      onTitleClick = {jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
