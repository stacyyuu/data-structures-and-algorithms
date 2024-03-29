const { Movies } = require('../movies');
const { sortTitle, sortYear, compareTitle, compareYear } = require('../sort');

describe('Sorters', () => {
  it('can sort movies by year', () => {
    const movies = sortYear(Movies);
    expect(movies.map((m) => m.title)).toEqual([
      'The Intouchables',
      'Valkyrie',
      'Stardust',
      'Ratatouille',
      'City of God',
      'Memento',
      'The Shawshank Redemption',
      'Beetlejuice',
      'Crocodile Dundee',
      'The Cotton Club',
    ]);
  });

  it('can sort movies by title', () => {
    const movies = sortTitle(Movies);
    expect(movies.map((m) => m.title)).toEqual([
      'Beetlejuice',
      'City of God',
      'The Cotton Club',
      'Crocodile Dundee',
      'The Intouchables',
      'Memento',
      'Ratatouille',
      'The Shawshank Redemption',
      'Stardust',
      'Valkyrie',
    ]);
  });
});

describe('Comparators', () => {
  it('can compare movies by year', () => {
    const movies = compareYear(Movies[0].year, Movies[3].year);
    expect(movies).toEqual(-2);
  });

  it('can compare movies by title', () => {
    const movies = compareTitle(Movies[1].title, Movies[2].title);
    expect(movies).toEqual(-1);
  });
});
