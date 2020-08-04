'use strict';

class Plane {
  constructor() {
    this._location;
  }
  land(airport) {
    airport.clearForLanding(this);
    this._location = airport;
  }
  takeOff(airport) {
    this._location.clearForTakeOff(this);
  }
};