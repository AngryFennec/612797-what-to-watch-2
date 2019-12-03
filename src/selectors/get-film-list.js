import {createSelector} from 'reselect';

const getFilms = (state) => state.DATA.allFilms;
const getActiveGenre = (state) => state.DATA.genre;

const getFilmList = createSelector(
    [getFilms, getActiveGenre],
    (allFilms, genre) => {
      return genre === `All genres` ? allFilms : allFilms.filter((film) => film.genre === genre);
    }
);

export default getFilmList;
