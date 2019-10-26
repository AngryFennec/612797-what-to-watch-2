import React from 'react';
import MainPage from './main-page.jsx';
import renderer from 'react-test-renderer';

it(`MainPage component renders correctly`, () => {
  const tree = renderer
    .create(<MainPage
      titles = {[]}
      onTitleClick = {jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
