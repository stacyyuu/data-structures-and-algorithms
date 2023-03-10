'use strict';

function sortYear(movies) {
  return movies.sort((a, b) => {
    if (b.year - a.year === 0) {
      return b.title.localeCompare(a.title);
    } else {
      return b.year - a.year;
    }
  });
}

function sortTitle(movies) {
  return movies.sort((a, b) => {
    let check = /^The /;
    return a.title.replace(check, '').localeCompare(b.title.replace(check, ''));
  });
}

const compareYear = (a, b) => b - a;

const compareTitle = (a, b) => {
  let check = /^The /;
  return a.replace(check, '').localeCompare(b.replace(check, ''));
};

module.exports = { sortYear, sortTitle, compareYear, compareTitle };
