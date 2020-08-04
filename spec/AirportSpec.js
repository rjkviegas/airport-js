'use strict';

describe('Airport', function() {
  var airport;
  var plane;
  var weather;
  beforeEach(function() {
    weather = jasmine.createSpyObj('weather', ['isStormy']);
    airport = new Airport(weather);
    plane = jasmine.createSpyObj('plane', ['land']);
  });
  it('has no planes by default', function() {
    expect(airport.planes()).toEqual([]);
  }); 
  describe('under NOT stormy conditions', function() {
    beforeEach(function() {
      weather.isStormy.and.returnValue(false);
    });
    it('can clear planes for landing', function() {
      airport.clearForLanding(plane);
      expect(airport.planes()).toEqual([plane]);
    });
    it('can clear planes for take off', function() {
      airport.clearForLanding(plane);
      airport.clearForTakeOff(plane);
      expect(airport.planes()).toEqual([]);
    })
  })
  describe('under stormy conditions', function() {
    beforeEach(function() {
      weather.isStormy.and.returnValue(true);
    });
    it('does not clear planes for take off', function() {
      expect(function() { airport.clearForTakeOff(plane); }).toThrowError('cannot take off during storm');
    });
    it('does not clear planes for landing', function() {
      expect(function() { airport.clearForLanding(plane); }).toThrowError('cannot land during storm')
    })
  });
});