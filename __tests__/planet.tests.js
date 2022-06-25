import Ageonotherplanets from './../src/planets.js';

describe('Ageonotherplanets', () => {

  test('test 1: should return an object called age with one property: earth age)', () => {
    const user = new Ageonotherplanets(100);
    expect(user.earthAge).toEqual(100);
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

  test('test 6: should return how many years a user has left to live on each planet', () => {
    const user = new Ageonotherplanets(100);
    expect(user.getsListOfYearsToLiveOnOtherPlanets()).toEqual(0);
  });
});


