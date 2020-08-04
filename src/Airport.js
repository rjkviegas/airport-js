'use strict';

const _DEFAULT_CAPACITY = 20;

class Airport {
  constructor(weather) {
    this._weather = typeof weather != 'undefined' ? weather : new Weather();
    this._hangar = []
  }
  planes(){
    return this._hangar;
  };
  _isAtCapacity() {
    return (this._hangar.length === _DEFAULT_CAPACITY);
  }
  clearForLanding(plane) {
    if(this._weather.isStormy()) {
      throw new Error('cannot land during storm');
    }
    if (this._isAtCapacity()) {
      throw new Error('cannot land as airport at capacity')
    }
    this._hangar.push(plane);
  };
  clearForTakeOff(plane) {
    if(this._weather.isStormy()) {
      throw new Error('cannot take off during storm');
    }
    this._hangar.pop(plane);
  };
};