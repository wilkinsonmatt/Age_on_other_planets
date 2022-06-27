import Ageonotherplanets from './../src/planets.js';

describe('Ageonotherplanets', () => {

  test('test 1: should return an object called age with one property: earth age)', () => {
    const user = new Ageonotherplanets(100);
    expect(user.age).toEqual(100);
  });

  test('test 2: should return their age in Mercury years. (A Mercury year is .24 Earth years.)', () => {
    const user = new Ageonotherplanets(100);
    expect(user.getMercuryAge()).toEqual(24);
  });

  test('test 3: should return their age in Venus years. (A Venus year is .62 Earth years.)', () => {
    const user = new Ageonotherplanets(100);
    expect(user.getVenusAge()).toEqual(62);
  });

  test('test 4: should return their age in Mars years. (A Mars year is 1.88 Earth years.)', () => {
    const user = new Ageonotherplanets(100);
    expect(user.getMarsAge()).toEqual(188);
  });

  test('test 5: should return their age in Jupiter years. (A Jupiter year is 11.86 Earth years.)', () => {
    const user = new Ageonotherplanets(100);
    expect(user.getJupiterAge()).toEqual(1186);
  });

  test('test 6: should determine how many years a user has left to live on Mercury… (yikes!))', () => {
    const user = new Ageonotherplanets(100);
    expect(user.yearsToLiveMercury).toEqual(-7.68);
  });

  test('test 7: should determine how many years a user has left to live on Venus (yikes!))', () => {
    const user = new Ageonotherplanets(100);
    expect(user.yearsToLiveVenus).toEqual(-19.84);
  });

  test('test 8: should determine how many years a user has left to live on Mars (yikes!))', () => {
    const user = new Ageonotherplanets(100);
    expect(user.yearsToLiveMars).toEqual(-60.16);
  });

  test('test 9: should determine how many years a user has left to live on Jupiter (yikes!))', () => {
    const user = new Ageonotherplanets(100);
    expect(user.yearsToLiveJupiter).toEqual(-379.52);
  });

  test('test 10: should return the number of years the user has lived past the life expectancy as a postive number, if the user has already surpassed the average life expectancy', () => {
    const user = new Ageonotherplanets(100);
    expect(user.getNumberOfYearsUserHasLivePastLifeExpectany()).toEqual(32);
  });

  test('test 11: should return 0, if the user has not already surpassed the average life expectancy', () => {
    const user = new Ageonotherplanets(26);
    expect(user.getNumberOfYearsUserHasLivePastLifeExpectany()).toEqual(0);
  });

});


