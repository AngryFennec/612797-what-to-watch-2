const getAllGenres = (allFilms) => {
  const allGenres = new Set([`All genres`]);
  allFilms.forEach((film) => {
    allGenres.add(film.genre);
  });
  return Array.from(allGenres);
};

export {getAllGenres};
