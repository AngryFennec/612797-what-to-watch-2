//  import films as allFilms from "./mocks/films.js";

const initialState = {
  genre: `All genres`,
  filteredFilms: [],
};

const filterFilms = (films, genre) => {
  const res = genre === `All genres` ? films : films.filter((film) => film.genre === genre);
  console.log(res);
  return res;
}

const ActionCreator = {
  applyGenreFilter: (genre) => ({
    type: `CHANGE_FILTER`,
    payload: genre
  }),

  getFilteredFilms: (films, genre) => ({
    type: `FILTER_FILMS`,
    payload: filterFilms(films, genre)
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `CHANGE_FILTER`:
      return Object.assign({}, state, {
        genre: action.payload
      });
    case `FILTER_FILMS`:
      return Object.assign({}, state, {
        filteredFilms: action.payload
      });
  }

  return state;
};

export {ActionCreator, reducer};
