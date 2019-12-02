import films from "./mocks/films.js";

const initialState = {
  genre: `All genres`,
  filteredFilms: [],
};

const Operation = {
  loadFilms: () => (dispatch, _getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        dispatch(ActionCreator.loadFilms(response.data));
      });
  },
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
  },

  loadFilms: () => {
    return {
      type: `LOAD_FILMS`,
      payload: films
    };
  },
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
    case `LOAD_FILMS`: return Object.assign({}, state, {
      films: action.payload
    });

  }

  return state;
};

export {ActionCreator, Operation, reducer, filterFilms};
