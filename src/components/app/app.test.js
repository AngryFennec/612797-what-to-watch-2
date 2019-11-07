import React from 'react';
import App from './app.jsx';
import renderer from 'react-test-renderer';

const films = [
  {
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
  }
];

it(`App component renders correctly`, () => {
  const tree = renderer
    .create(<App
      films = {films}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
