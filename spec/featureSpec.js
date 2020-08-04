'use strict';

describe('Feature Test:', function() {
  var plane;
  var airport;
  var weather;
  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  });
  describe('in NOT stormy weather', function() {
    beforeEach(function() {
      spyOn(Math, 'random').and.returnValue(0);
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
  })
    describe('when weather is stormy', function() {

      it('take off prevented', function() {
        spyOn(Math, 'random').and.returnValue(0);
        plane.land(airport);
        spyOn(airport._weather, 'isStormy').and.returnValue(true);
        expect(function() { plane.takeOff(airport); }).toThrowError('cannot take off during storm');
        expect(airport.planes()).toContain(plane);
      });
  
      it('landing prevented', function() {
        spyOn(Math, 'random').and.returnValue(1);
        expect(function() { plane.land(airport); }).toThrowError('cannot land during storm');
        expect(airport.planes()).not.toContain(plane)
      })
    })

    describe('when airport is at capacity', function() {

      it('planes are prevented from landing', function() {
        spyOn(Math, 'random').and.returnValue(0);
        spyOn(airport, '_isAtCapacity').and.returnValue(true);
        expect(function() { plane.land(airport); }).toThrowError('cannot land as airport at capacity');
      })
    })
    
  });
