angleMode = "radians";

var Mover = function () {
   
    this.position = new PVector(width/2,height/2);
    this.velocity = new PVector(2,2);
    this.acceleration = new PVector(0,0);
    this.topspeed = 2;
    this.angle = 0;

};

Mover.prototype.update = function () {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topspeed);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
};

Mover.prototype.applyForce = function(force) {
    this.acceleration.add(force);
};

Mover.prototype.turnLeft = function () {
    var force = PVector.get(this.velocity);
    force.rotate(-PI/2);
    this.applyForce(force);
};

Mover.prototype.turnRight = function () {
    var force = PVector.get(this.velocity);
    force.rotate(PI/2);
    this.applyForce(force);
};

Mover.prototype.goFast = function () {
    println("fast");
        this.topspeed += 2;
};
  
