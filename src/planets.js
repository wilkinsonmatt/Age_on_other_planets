export default class Ageonotherplanets {
  constructor(age) {
    this.earthAge = age;
  }

  getMercuryAge() {
    let mercuryAge = .24 * this.earthAge;
    return mercuryAge;
  }
  getVenusAge() {
    let venusAge = .62 * this.earthAge;
    return venusAge;
  }
  getMarsAge() {
    let marsAge = 1.88 * this.earthAge;
    return marsAge;
  }
  getJupiterAge() {
    let jupiterAge = 11.86 * this.earthAge;
    return jupiterAge;
  }
}


