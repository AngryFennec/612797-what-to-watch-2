import React from 'react';
import MainPage from './main-page.jsx';
import renderer from 'react-test-renderer';

const films = [
  {
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
  }
];

it(`MainPage component renders correctly`, () => {
  const tree = renderer
    .create(<MainPage
      films = {films}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
