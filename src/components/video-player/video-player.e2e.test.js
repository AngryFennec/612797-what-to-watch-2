import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import VideoPlayer from './video-player';

Enzyme.configure({adapter: new Adapter()});

it(`AudioPlayer correctly renders after relaunch`, () => {

  const film = {
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  };

  VideoPlayer.prototype.componentDidUpdate = jest.fn();
  const screen = mount(<VideoPlayer
    img={film.img}
    src={film.src}
    isPlaying={false}
  />);

  expect(screen.state().isPlaying).toBe(false);

});
