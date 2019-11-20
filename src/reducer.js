//  import films from "./mocks/films.js";

const initialState = {
  genre: `All genres`,
  filteredFilms: []
};

const ActionCreator = {
  applyGenreFilter: (genre) => ({
    type: `CHANGE_FILTER`,
    payload: genre
  }),

  getFilterefFilms: (films, genre) => ({
    type: `FILTER_FILMS`,
    payload: genre === `All genres` ? films : films.filter((film) => film.genre === genre)
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `CHANGE_FILTER`:
      return Object.assign({}, state, {
        genre: action.payload
      });
    case `FILTER_FILMS`:
    console.log(action.payload);
      return Object.assign({}, state, {
        filteredFilms: action.payload
      });
  }

  return state;
};

export {ActionCreator, reducer};
