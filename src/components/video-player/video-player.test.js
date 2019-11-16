import React from 'react';
import renderer from 'react-test-renderer';
import VideoPlayer from './video-player';

const film = {
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
};
it(`VideoPlayer correctly renders after relaunch`, () => {

  const tree = renderer
  .create(<VideoPlayer
    img={film.img}
    src={film.src}
    isPlaying={true}
  />, {
    createNodeMock: () => {
      return {};
    }
  })
  .toJSON();

  expect(tree).toMatchSnapshot();
});
