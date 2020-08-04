'use strict';

describe('Feature Test:', function() {
  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  });

    it('planes can land at an airport', function() {
      plane.land(airport);
      expect(airport.planes()).toContain(plane);
    });

    it('planes can take off from an airport', function() {
      plane.land(airport);
      plane.takeOff(airport);
      expect(airport.planes()).not.toContain(plane);
    })
    describe('when weather is stormy', function() {})
    it('prevents take off when weather is stormy', function() {
      plane.land(airport);
      spyOn(airport, '_isStormy').and.returnValue(true);
      expect(function() { plane.takeOff(airport); }).toThrowError('cannot take off during storm');
      expect(airport.planes()).toContain(plane);
    });

    it('prevents landing when weather is stormy', function() {
      spyOn(airport, '_isStormy').and.returnValue(true);
      expect(function() { plane.land(airport); }).toThrowError('cannot land during storm');
      expect(airport.planes()).not.toContain(plane)
    })
  });
