var food = function (width,height) {
    this.position = new PVector(width,height);  
    this.period = 120;
    this.amplitude =100;
    this.counter = 0;
    this.ra = 10;
};

//prey (red thing) object

var fish = function () {
    this.position = new PVector(random(width), random(200,400));
    this.mass = 30;
    this.G = 1;
    this.velocity = new PVector (0,0);
    this.acceleration = new PVector (0,0);
    this.fat = 20;
};

var prey = new fish ();
var goal = new food (random(width),random(height));

fish.prototype.update = function() {
    var mouse = new PVector(goal.position.x, goal.position.y);
    var dir = PVector.sub(mouse, this.position);
    
    var maxDir = new PVector (width,height);
    var maxMag = maxDir.dist;
    
    dir.normalize();
    dir.mult(0.1);
    
    this.acceleration = dir;
    this.velocity.add(this.acceleration);
    this.velocity.limit(5);
    this.position.add(this.velocity);
};

fish.prototype.display = function () {
    strokeWeight(2);
    fill(255, 0, 0);
    
    ellipse(this.position.x,this.position.y,this.fat,this.fat);
    
};

fish.prototype.checkEdges = function () {
    if(this.position.x >400 || this.position.x < 0) {
        this.velocity.x *= -1;   
    }
    
    if(this.position.y >400 || this.position.y < 0) {
        this.velocity.y *= -1;   
    }
};

food.prototype.display = function () {
    noStroke();
    fill(140, 112, 56);
    
    var x = this.amplitude * sin(100 * frameCount / this.period);
    
    
    ellipse(this.position.x,this.position.y+x,this.ra,this.ra); 
    
    //this.counter += 0.1;
    this.position.x += 0.2;
};

food.prototype.checkEdges = function () {
    if (this.position.x > 400) {
        this.position.x = 0;  
    }
};

food.prototype.collision = function () {
    if ((this.ra + prey.fat) >= dist(this.position.x,this.position.y,prey.position.x,prey.position.y)) {
        
    
        this.position.x = random(width);
        this.position.y = random(height);
    }
    
};


draw = function() {
    background(106, 232, 226);
    
        prey.update();
        prey.checkEdges();
        prey.display();
    
    
        goal.checkEdges();
        goal.display();
        goal.collision();
};

