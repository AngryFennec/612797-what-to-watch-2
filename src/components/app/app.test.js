import React from 'react';
import App from './app.jsx';
import renderer from 'react-test-renderer';

it(`App component renders correctly`, () => {
  const tree = renderer
    .create(<App
      titles = {[]}
      onTitleClick = {jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
