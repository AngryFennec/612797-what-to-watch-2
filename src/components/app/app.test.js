import React from 'react';
import App from './app.jsx';
import renderer from 'react-test-renderer';

const titles = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`, `Yet another movie`];

it(`App component renders correctly`, () => {
  const tree = renderer
    .create(<App
      titles = {titles}
      onTitleClick = {jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
