import {
  ActionCreator,
  reducer,
} from "./reducer.js";

describe(`Action creators work correctly`, () => {
  it(`Action creator for apply filter returns correct action`, () => {
    expect(ActionCreator.applyGenreFilter(`some-genre`)).toEqual({
      type: `CHANGE_FILTER`,
      payload: `some-genre`,
    });
  });

  it(`Action creator for filter films returns action with All genres payload if genre is All genres`, () => {
    expect(ActionCreator.getFilterefFilms([
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
    ], `All genres`)).toEqual({
      type: `FILTER_FILMS`,
      payload: [
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
      ],
    });
  });
  it(`Action creator for filter films returns action with selected genre payload if genre is action`, () => {
    expect(ActionCreator.getFilterefFilms([
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
    ], `action`)).toEqual({
      type: `FILTER_FILMS`,
      payload: [
        {
          title: ``,
          img: ``,
          src: ``,
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

  it(`Reducer should filter films by a given genre`, () => {
    expect(reducer({
      filteredFilms: [
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
      ],
      genre: `All genres`,
    }, {
      type: `FILTER_FILMS`,
      payload: `shooter`,
    })).toMatchObject({
      genre: `All genres`,
      filteredFilms: [
        {
          title: `y`,
          img: ``,
          src: ``,
          genre: `shooter`
        }
      ]
    });
  });
});
