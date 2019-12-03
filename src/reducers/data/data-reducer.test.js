import {dataReducer as reducer} from "./data-reducer.js";
import {ActionCreator, filterFilms, Operation} from "./data-reducer.js";
import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api.js";

const mockFilms = [
  {
    id: 1,
    name: `The Grand Budapest Hotel`,
    posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
    previewImage: `img/the-grand-budapest-hotel.jpg`,
    backgroundImage: `img/the-grand-budapest-hotel-bg.jpg`,
    backgroundColor: `#ffffff`,
    videoLink: `https://some-link`,
    previewVideoLink: `https://some-link`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    rating: 8.9,
    scoresCount: 240,
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
    runTime: 99,
    genre: `Comedy`,
    released: 2014,
    isFavorite: false,
  },
  {
    id: 2,
    name: `The Grand Budapest Hotel`,
    posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
    previewImage: `img/the-grand-budapest-hotel.jpg`,
    backgroundImage: `img/the-grand-budapest-hotel-bg.jpg`,
    backgroundColor: `#ffffff`,
    videoLink: `https://some-link`,
    previewVideoLink: `https://some-link`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    rating: 8.9,
    scoresCount: 240,
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
    runTime: 99,
    genre: `Action`,
    released: 2014,
    isFavorite: false,
  },
];

describe(`Filter work correctly`, () => {

  it(`All genres filter is correct`, () => {
    expect(filterFilms(mockFilms, `All genres`)).toEqual(mockFilms);
  });

  it(`Some genre filter is correct`, () => {
    expect(filterFilms(mockFilms, `Action`)).toEqual([
      {
        id: 2,
        name: `The Grand Budapest Hotel`,
        posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
        previewImage: `img/the-grand-budapest-hotel.jpg`,
        backgroundImage: `img/the-grand-budapest-hotel-bg.jpg`,
        backgroundColor: `#ffffff`,
        videoLink: `https://some-link`,
        previewVideoLink: `https://some-link`,
        description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
        rating: 8.9,
        scoresCount: 240,
        director: `Wes Andreson`,
        starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
        runTime: 99,
        genre: `Action`,
        released: 2014,
        isFavorite: false,
      }
    ]);
  });
});

describe(`Action creators work correctly`, () => {

  it(`Action creator for apply filter returns correct action`, () => {
    expect(ActionCreator.applyGenreFilter(`some-genre`)).toEqual({
      type: `CHANGE_FILTER`,
      payload: `some-genre`,
    });
  });

  it(`Action creator for filter films returns action with All genres payload if genre is All genres`, () => {
    expect(ActionCreator.getFilteredFilms(`All genres`)).toEqual({
      type: `GET_FILTERED_FILMS`,
      payload: `All genres`,
    });
  });
  it(`Action creator for filter films returns action with selected genre payload if genre is action`, () => {
    expect(ActionCreator.getFilteredFilms(`Action`)).toEqual({
      type: `GET_FILTERED_FILMS`,
      payload: `Action`
    });
  });

});

describe(`Reducer works correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      genre: `All genres`,
      filteredFilms: [],
      allFilms: []
    });
  });

  it(`Reducer should set genre to given value`, () => {
    expect(reducer({
      genre: `All genres`,
      filteredFilms: [],
      allFilms: []
    }, {
      type: `CHANGE_FILTER`,
      payload: `some-genre`,
    })).toEqual({
      genre: `some-genre`,
      filteredFilms: [],
      allFilms: []
    });
  });
});

describe(`Network works correctly`, () => {
  it(`Should make a correct API call to /films`, function () {
    const dispatch = jest.fn();
    const api = createAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const filmsLoader = Operation.loadFilms();

    apiMock
      .onGet(`/films`)
      .reply(200, [{fake: true}]);

    return filmsLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: `LOAD_FILMS`,
          payload: [{fake: true}],
        });
      });
  });
});
