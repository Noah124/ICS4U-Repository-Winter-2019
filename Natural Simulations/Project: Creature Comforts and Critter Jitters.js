//prey (red thing) object

var fish = function () {
    this.position = new PVector(random(width), random(height));
    this.mass = 20;
    this.G = 1;
    this.velocity = new PVector (0,0);
    this.acceleration = new PVector (0,0);
};

fish.prototype.calculateAttraction = function(m) {
    var force = PVector.sub(this.position, m.position);
    var distance = force.mag();
    distance = constrain(distance, 5, 25);  
    force.normalize();
    var strength = (this.G * this.mass * m.mass) / (distance * distance);
    force.mult(strength);
    return force;
};

fish.prototype.update = function() {
    var mouse = new PVector(mouseX, mouseY);
    var dir = PVector.sub(mouse, this.position);
    
    var maxDir = new PVector (width,height);
    var maxMag = maxDir.dist;
    
    dir.normalize();
    dir.mult(0.002);
    
    if(this.position.x >400 || this.position.x < 0) {
        this.velocity.x *= -1;   
    }
    
    if(this.position.y >400 || this.position.y < 0) {
        this.velocity.y *= -1;   
    }
    
    this.acceleration = dir;
    this.velocity.add(this.acceleration);
    this.velocity.limit(5);
    this.position.add(this.velocity);
};

fish.prototype.display = function () {
    strokeWeight(2);
    fill(255, 0, 0);
    
    triangle(this.position.x,this.position.y,this.position.x +20,this.position.y-20,this.position.x-20,this.position.y-20);
    fill(255, 255, 255);
    ellipse(this.position.x-10,this.position.y-15,5,5);
    ellipse(this.position.x+10,this.position.y-15,5,5);
    ellipse(this.position.x,this.position.y-10,10,5);
    
};

//predator (blue fish) object

var eat = function (mass, x, y) {
    this.position = new PVector(x, y);
    this.velocity = new PVector(1, 0);
    this.acceleration = new PVector(0, 0);
    this.mass = mass;    
};

eat.prototype.applyForce = function(force) {
    var f = PVector.div( force, this.mass);
    this.acceleration.add(f);
};

eat.prototype.update = function() {
    
    if(this.position.x >400 || this.position.x < 0) {
        this.velocity.x *= -1;   
    }
    if(this.position.y >400 || this.position.y < 0) {
        this.velocity.y *= -1;   
    }
    
   this.velocity.add(this.acceleration);
   this.position.add(this.velocity);
   this.acceleration.mult(0.02); 
};

eat.prototype.display = function () {
    strokeWeight(2);
    
    fill(82, 104, 158);
    ellipse(this.position.x, this.position.y, 25, 15);
    triangle(this.position.x-12.5,this.position.y,this.position.x -20,this.position.y+10,this.position.x-20,this.position.y-10);
    fill(28, 25, 25);
    ellipse(this.position.x + 10,this.position.y,5,5);
    
};

//red is attracted to mouse
var prey = new fish ();

//fish are attracted to red
var pred = [];

for (var i = 0; i < 3; i++) {
    pred[i] = new eat(random(0.1, 2), random(width), random(height));
}

draw = function() {
    background(106, 232, 226);
    
    for (var i = 0; i <pred.length; i++) {
        
        var force = prey.calculateAttraction(pred[i]);
        
        pred[i].applyForce(force);
        prey.update();
        pred[i].update();
        
        prey.display();
        pred[i].display();
    }
    
};

