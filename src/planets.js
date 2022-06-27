export class Ageonotherplanets {
  constructor(age) {
    this.age = age;
    this.lifeExpectancy = 68;
    this.yearsToLive = this.lifeExpectancy - this.age;
    this.yearsToLiveMercury = this.yearsToLive * .24;
    this.yearsToLiveVenus = this.yearsToLive * .62;
    this.yearsToLiveMars = this.yearsToLive * 1.88;
    this.yearsToLiveJupiter = this.yearsToLive * 11.86;
  }
  getMercuryAge() {
    return .24 * this.age;
  }
  getVenusAge() {
    return .62 * this.age;
  }
  getMarsAge() {
    return 1.88 * this.age;
  }
  getJupiterAge() {
    return 11.86 * this.age;
  }
  getListOfLifeExpectancyforEachPlanet() {
    let list = [];
    const lifeExpectancy = 68;
    if(this.age > lifeExpectancy){
      list.push(`You've lived ${(this.age - lifeExpectancy)} Earth years past the average life expectancy`);
      list.push(`You've lived ${(this.age - lifeExpectancy) * .24} Mercury years past the average life expectancy`);
      list.push(`You've lived ${(this.age - lifeExpectancy) * .62} Venus years past the average life expectancy`);
      list.push(`You've lived ${(this.age - lifeExpectancy) * 1.88} Mars years past the average life expectancy`);
      list.push(`You've lived ${(this.age - lifeExpectancy) * 11.86} Jupiter years past the average life expectancy`);
    }else{
      list.push(`Based on average life expectancy you have ${(lifeExpectancy - this.age)} Earth years left to live`);
      list.push(`Based on average life expectancy you have ${(lifeExpectancy - this.age) * .24} Mercury years left to live`);
      list.push(`Based on average life expectancy you have ${(lifeExpectancy - this.age) * .62} Venus years left to live`);
      list.push(`Based on average life expectancy you have ${(lifeExpectancy - this.age) * 1.88} Mars years left to live`);
      list.push(`Based on average life expectancy you have ${(lifeExpectancy - this.age) * 11.86} Jupiter years left to live`);
    }
    return list;
  }
  getNumberOfYearsUserHasLivePastLifeExpectany() {
    if(this.age > this.lifeExpectancy) {
      return this.age - this.lifeExpectancy;
    }else{
      return 0;
    }
  }
}
export function checkAge(age) {
  if(age >= 0) {
    return true;
  }
  return false;
}