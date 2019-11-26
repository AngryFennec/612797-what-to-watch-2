import films from "./mocks/films.js";

const initialState = {
  genre: `All genres`,
  filteredFilms: [],
};

const filterFilms = (allFilms, genre) => {

  return genre === `All genres` ? allFilms : allFilms.filter((film) => film.genre === genre);
};

const ActionCreator = {
  getAllFilms: () => {
    return films;
  },
  applyGenreFilter: (genre) => {
    return {
      type: `CHANGE_FILTER`,
      payload: genre
    };
  },

  getFilteredFilms: (genre) => {
    const allFilms = ActionCreator.getAllFilms();
    return {
      type: `GET_FILTERED_FILMS`,
      payload: filterFilms(allFilms, genre)
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `CHANGE_FILTER`:
      return Object.assign({}, state, {
        genre: action.payload
      });
    case `GET_FILTERED_FILMS`:
      return Object.assign({}, state, {
        filteredFilms: action.payload
      });
  }

  return state;
};

export {ActionCreator, reducer, filterFilms};
