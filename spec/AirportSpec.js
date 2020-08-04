'use strict';

describe('Airport', function() {
  var airport;
  var plane;
  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpyObj('plane', ['land'])
  });
  it('has no planes by default', function() {
    expect(airport.planes()).toEqual([]);
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
  describe('under stormy conditions', function() {
    it('does not clear planes for take off', function() {
      spyOn(airport, '_isStormy').and.returnValue(true);
      expect(function() { airport.clearForTakeOff(plane); }).toThrowError('cannot take off during storm');
    });
    it('does not clear planes for landing', function() {
      spyOn(airport, '_isStormy').and.returnValue(true);
      expect(function() { airport.clearForLanding(plane); }).toThrowError('cannot land during storm')
    })
  });
});