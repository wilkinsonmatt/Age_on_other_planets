import Ageonotherplanets from './../src/planets.js';

describe('Ageonotherplanets', () => {

  test('test1: should return an object called age with one property: earth age)', () => {
    const user = new Ageonotherplanets(100);
    expect(user.earthAge).toEqual(100);
  });

  test('test2: should return their age in Mercury years. (A Mercury year is .24 Earth years.)', () => {
    const user = new Ageonotherplanets(100);
    expect(user.getMercuryAge()).toEqual(24);
  });

  test('test3: should return their age in Venus years. (A Venus year is .62 Earth years.)', () => {
    const user = new Ageonotherplanets(100);
    expect(user.getVenusAge()).toEqual(62);
  }); 

  // test('should return their age in Mars years. (A Mars year is 1.88 Earth years.)', () => {
  //   const age = new Ageonotherplanets(23);
  //   expect(age.mars).toEqual(23);
  // });

  // test('should return their age in Jupiter years. (A Jupiter year is 11.86 Earth years.)', () => {
  //   const age = new Ageonotherplanets(23);
  //   expect(age.jupiter).toEqual(23);
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