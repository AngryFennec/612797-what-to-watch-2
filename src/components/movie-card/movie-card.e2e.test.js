import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieCard from "./movie-card.jsx";

const film = {
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
};

Enzyme.configure({adapter: new Adapter()});

it(`Card hover`, () => {

  const movieCardHoverHandler = jest.fn();
  const movieCardLeaveHandler = jest.fn();
  const app = shallow(<MovieCard
    film={film}
    id={0}
    onCardHover = {movieCardHoverHandler}
    onCardLeave = {movieCardLeaveHandler}
    isPlaying = {true}
    changeActiveItemHandler = {jest.fn()}
  />);

  app.simulate(`mouseenter`);
  expect(movieCardHoverHandler).toHaveBeenCalledTimes(1);
  app.simulate(`mouseleave`);
  expect(movieCardLeaveHandler).toHaveBeenCalledTimes(1);
});
