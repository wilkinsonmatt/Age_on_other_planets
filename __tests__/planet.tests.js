import { Ageonotherplanets, checkAge }  from './../src/planets.js';

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

  test('test 12: should array of strings that ', () => {
    const user = new Ageonotherplanets(26);
    expect(user.getNumberOfYearsUserHasLivePastLifeExpectany()).toEqual(0);
  });

  test('test 13: should return an array containing how many planet years the user has to live on each planet', () => {
    const user = new Ageonotherplanets(100);
    expect(user.getListOfLifeExpectancyforEachPlanet()).toEqual(["You've lived 32 Earth years past the average life expectancy", "You've lived 7.68 Mercury years past the average life expectancy", "You've lived 19.84 Venus years past the average life expectancy", "You've lived 60.16 Mars years past the average life expectancy", "You've lived 379.52 Jupiter years past the average life expectancy"]);
  });

  test('test 14: should return an array containing how many planet years the user has lived past the life expectancy on each planet', () => {
    const user = new Ageonotherplanets(26);
    expect(user.getListOfLifeExpectancyforEachPlanet()).toEqual(["Based on average life expectancy you have 42 Earth years left to live", "Based on average life expectancy you have 10.08 Mercury years left to live", "Based on average life expectancy you have 26.04 Venus years left to live", "Based on average life expectancy you have 78.96 Mars years left to live", "Based on average life expectancy you have 498.12 Jupiter years left to live"]);
  });
});

describe('checkAge', () => {
  test("test 15: should return true if user age is a number equal to or greater 0, or return false", () => {
    expect(checkAge(1)).toEqual(true);
    expect(checkAge(-1)).toEqual(false);
  });
});


