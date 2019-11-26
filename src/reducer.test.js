import {
  ActionCreator,
  reducer,
  filterFilms
} from "./reducer.js";

const mockFilms = [
  {
    title: ``,
    img: ``,
    src: ``,
    genre: `action`
  },
  {
    title: `y`,
    img: ``,
    src: ``,
    genre: `shooter`
  }
];

const films = [
  {
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    genre: `action`
  },
  {
    title: `Bohemian Rhapsody`,
    img: `img/bohemian-rhapsody.jpg`,
    src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    genre: `shooter`
  },
  {
    title: `Macbeth`,
    img: `img/macbeth.jpg`,
    src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    genre: `drama`
  },
  {
    title: `Aviator`,
    img: `img/aviator.jpg`,
    src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    genre: `horror`
  },
  {
    title: `We need to talk about Kevin`,
    img: `img/we-need-to-talk-about-kevin.jpg`,
    src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    genre: `comedy`
  },
];

describe(`Filter work correctly`, () => {

  it(`All genres filter is correct`, () => {
    expect(filterFilms(mockFilms, `All genres`)).toEqual(mockFilms);
  });

  it(`Some genre filter is correct`, () => {
    expect(filterFilms(mockFilms, `shooter`)).toEqual([
      {
        title: `y`,
        img: ``,
        src: ``,
        genre: `shooter`
      }
    ]);
  });
});

describe(`Action creators work correctly`, () => {

  it(`Action creator for get all films returns correct action`, () => {
    expect(ActionCreator.getAllFilms()).toEqual(films);
  });

  it(`Action creator for apply filter returns correct action`, () => {
    expect(ActionCreator.applyGenreFilter(`some-genre`)).toEqual({
      type: `CHANGE_FILTER`,
      payload: `some-genre`,
    });
  });

  it(`Action creator for filter films returns action with All genres payload if genre is All genres`, () => {
    expect(ActionCreator.getFilteredFilms(`All genres`)).toEqual({
      type: `GET_FILTERED_FILMS`,
      payload: films,
    });
  });
  it(`Action creator for filter films returns action with selected genre payload if genre is action`, () => {
    expect(ActionCreator.getFilteredFilms(`action`)).toEqual({
      type: `GET_FILTERED_FILMS`,
      payload: [
        {
          title: `Fantastic Beasts: The Crimes of Grindelwald`,
          img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
          src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
          genre: `action`
        }
      ],
    });
  });

});

describe(`Reducer works correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      genre: `All genres`,
      filteredFilms: []
    });
  });

  it(`Reducer should set genre to given value`, () => {
    expect(reducer({
      genre: `All genres`,
      filteredFilms: []
    }, {
      type: `CHANGE_FILTER`,
      payload: `some-genre`,
    })).toEqual({
      genre: `some-genre`,
      filteredFilms: []
    });
  });
});
