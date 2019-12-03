const initialState = {
  genre: `All genres`,
  filteredFilms: [],
  allFilms: []
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
  applyGenreFilter: (genre) => {
    return {
      type: `CHANGE_FILTER`,
      payload: genre
    };
  },

  getFilteredFilms: (films, genre = `All genres`) => {
    return {
      type: `GET_FILTERED_FILMS`,
      payload: filterFilms(films, genre)
    };
  },

  loadFilms: (films) => {
    return {
      type: `LOAD_FILMS`,
      payload: films
    };
  },
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {

    case `CHANGE_FILTER`:
      return Object.assign({}, state, {
        genre: action.payload
      });
    case `GET_FILTERED_FILMS`:
      return Object.assign({}, state, {
        filteredFilms: action.payload
      });
    case `LOAD_FILMS`:
      return Object.assign({}, state, {
        allFilms: action.payload
      });

  }

  return state;
};

export {ActionCreator, Operation, dataReducer, filterFilms};
