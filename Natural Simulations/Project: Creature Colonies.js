/// Bubble Particles based off "Challenge: Fish bubbles"
var Particle = function(position) {
    this.acceleration = new PVector(0, -0.05);
    this.velocity = new PVector(random(-1, 1), random(-1, 0));
    this.position = position.get();
    this.timeToLive = 100;
};

Particle.prototype.run = function() {
    this.update();
    this.display();
};

Particle.prototype.update = function(){
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.timeToLive -= 2;
};

Particle.prototype.display = function() {
    stroke(255, 255, 255, 100);
    strokeWeight(2);
    fill(255, 255, 255, 50);
    var radius = (height-this.position.y)/15;
    ellipse(this.position.x, this.position.y, radius, radius);
};

Particle.prototype.isDead = function() {
    if (this.timeToLive < 0) {
        return true;
    } else {
        return false;
    }
};

/// the system of fish bubbles
var ParticleSystem = function(position) {
    this.origin = position.get();
    this.particles = [];
};

ParticleSystem.prototype.addParticle = function() {
    this.particles.push(new Particle(this.origin));
};

ParticleSystem.prototype.run = function() {
    for (var i = this.particles.length-1; i >= 0; i--) {
        var p = this.particles[i];
        p.run();
        if (p.isDead()) {
            this.particles.splice(i, 1);
        }
    }
};

/// the fish
var fish = function () {
    this.position = new PVector(random(width), random(height));
    this.mass = 20;
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
    dir.mult(0.1);
    
    if(this.position.x >400 || this.position.x < 0) {
        this.velocity.x *= -0.1;   
    }
    
    if(this.position.y >400 || this.position.y < 0) {
        this.velocity.y *= -0.1;   
    }
    
    this.acceleration = dir;
    this.velocity.add(this.acceleration);
    this.velocity.limit(5);
    this.position.add(this.velocity);
};

fish.prototype.display = function () {
     strokeWeight(2);
    
    fill(82, 104, 158);
    ellipse(this.position.x, this.position.y, 25, 15);
    triangle(this.position.x-12.5,this.position.y,this.position.x -20,this.position.y+10,this.position.x-20,this.position.y-10);
    fill(28, 25, 25);
    ellipse(this.position.x + 10,this.position.y,5,5);
};

fish.prototype.getMouthPosition = function() {
    return new PVector(this.position.x, this.position.y);
};


// declarations
var prey = new fish ();
var bubbub = new ParticleSystem(prey.getMouthPosition());

draw = function() {
    background(106, 232, 226);
    bubbub.run();
    
    if(frameCount %5 ===0) {
        bubbub.addParticle();
    }
    
    bubbub.origin.set(prey.getMouthPosition());
    bubbub.run();
    
    prey.update();
    prey.display();
};


