'use strict';

function sortYear(movies) {
  return movies.sort((a, b) => b.year - a.year);
}

function sortTitle(movies) {
  return movies.sort((a, b) => {
    a.title.replace('The', '').localeCompare(b.title.replace('The', ''));
  });
}

module.exports = { sortYear, sortTitle };
