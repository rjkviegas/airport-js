describe('Airport', function() {

  var airport;

  beforeEach(function() {
    airport = new Airport;
    plane = jasmine.createSpy('plane');
  });
  describe('an Airport can have', function() {
    it('a plane land', function() {
      expect(airport.land(plane)).toBeDefined();
    });

    it('a plane take off', function() {
      expect(airport.takeOff(plane)).toBeDefined();
    });
  });
});