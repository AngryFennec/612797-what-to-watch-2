import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieCard from "./movie-card.jsx";

Enzyme.configure({adapter: new Adapter()});

it(`Title click`, () => {

  const titleClickHandler = jest.fn();
  const app = shallow(<MovieCard
    title={`title`}
    id={`0`}
    onTitleClick = {titleClickHandler}
  />);

  const link = app.find(`.small-movie-card__link`);
  link.simulate(`click`);
  expect(titleClickHandler).toHaveBeenCalledTimes(1);
});
