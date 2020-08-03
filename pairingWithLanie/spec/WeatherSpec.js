describe('Weather', function(){
  
  var weather;

  describe('initializes with', function() {
    it('instance variable', function() {
      var weather = new Weather(1);
      expect(weather.getRandNum()).toBe(1)
    })
  })
  
  describe('is stormy when', function(){

    it('instance variable is 1', function(){
      var weather = new Weather(1);
        expect(weather.isStormy()).toBe(true);
    })
  })

  describe('is not stormy when', function(){

    it('instance variable is 2', function() {
      var weather = new Weather(2);
      expect(weather.isStormy()).toBe(false);
    }); 
  });
});
