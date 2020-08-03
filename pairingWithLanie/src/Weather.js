class Weather {
  constructor(randNum) {
    this.randNum = randNum;
  }
}
Weather.prototype.getRandNum = function() {
  return this.randNum;
}
Weather.prototype.isStormy = function() {
    if (this.randNum === 1) {
      return true;
    } else {
      return false;
    }
}