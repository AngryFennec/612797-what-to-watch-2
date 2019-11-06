import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieCard from "./movie-card.jsx";

const film = {
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
};

Enzyme.configure({adapter: new Adapter()});

it(`Title click`, () => {

  const movieCardHoverHandler = jest.fn();
  const app = shallow(<MovieCard
    film={film}
    id={`0`}
    onCardHover = {movieCardHoverHandler}
  />);

  app.simulate(`mouseenter`);
  expect(titleClickHandler).toHaveBeenCalledTimes(1);
});
