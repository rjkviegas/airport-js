'use strict';

class Airport {
  constructor() {
    this._hangar = []
  }
  planes(){
    return this._hangar;
  };
  clearForLanding(plane) {
    if(this._isStormy()) {
      throw new Error('cannot land during storm');
    }
    this._hangar.push(plane);
  };
  clearForTakeOff(plane) {
    if(this._isStormy()) {
      throw new Error('cannot take off during storm');
    }
    this._hangar.pop(plane);
  };
  _isStormy() {
    return false;
  };
};