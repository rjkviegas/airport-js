describe('Plane', function() {

  var plane;



  describe('returns false to isFlying', function() {

    it('upon initialization', function() {
      var plane = new Plane();
      expect(plane.isFlying()).toBe(false)
    })
    it('after it has landed', function() {
      var plane = new Plane();
      plane.taken_off;
      plane.landed;
      expect(plane.isFlying()).toBe(false);
    })
  })
  describe('returns true to isFlying', function() {
    it('after it has taken off', function() {
      var plane = new Plane();
      plane.taken_off;
      expect(plane.isFlying()).toBe(true);
    })
  })
})