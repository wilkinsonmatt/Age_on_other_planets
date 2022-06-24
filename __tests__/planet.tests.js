import Ageonotherplanets from './../src/planets.js';

describe('Ageonotherplanets', () => {

  test('should return an object age with a earth age of 23)', () => {
    const age = new Ageonotherplanets(23);
    expect(age).toEqual(23);
  });

  // test('should return their age in Mercury years. (A Mercury year is .24 Earth years.)', () => {
  //   const age = new Ageonotherplanets(23);
  //   expect(age.Ageonotherplanets.mercury).toEqual(23);
  // });

  // test('should return their age in Venus years. (A Venus year is .62 Earth years.)', () => {
  //   const age = new Ageonotherplanets(23);
  //   expect(age.Ageonotherplanets.venus).toEqual(23);
  // });

  // test('should return their age in Mars years. (A Mars year is 1.88 Earth years.)', () => {
  //   const age = new Ageonotherplanets(23);
  //   expect(age.Ageonotherplanets.mars).toEqual(23);
  // });

  // test('should return their age in Jupiter years. (A Jupiter year is 11.86 Earth years.)', () => {
  //   const age = new Ageonotherplanets(23);
  //   expect(age.Ageonotherplanets.jupiter).toEqual(23);
  // });

});



// describe('Triangle', () => {

//   test('should correctly create a triangle object with three lengths', () => {
//     const triangle = new Triangle(2,4,5);
//     expect(triangle.side1).toEqual(2);
//     expect(triangle.side2).toEqual(4);
//     expect(triangle.side3).toEqual(5);
//   });

//   test('should correctly determine whether three lengths are not a triangle', () => {
//     const notTriangle = new Triangle(3,9,22);
//     expect(notTriangle.checkType()).toEqual("not a triangle");
//   });

//   test('should correctly determine whether three lengths make a scalene triangle', () => {
//     const scalTriangle = new Triangle(4,5,7)
//     expect(scalTriangle.checkType()).toEqual("scalene triangle");
//   });

//   test('should correctly determine whether three lengths make an isosceles triangle', () => {
//     const isocTriangle = new Triangle(5,5,7)
//     expect(isocTriangle.checkType()).toEqual("isosceles triangle");
//   });

//});