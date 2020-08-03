class Plane {
  constructor() {
    this.flying = false;
  }
}

Plane.prototype.isFlying = function() {
  return this.flying;
}

Plane.prototype.taken_off = function() {
  if this.flying === false {
    this.flying = true;
  }
}