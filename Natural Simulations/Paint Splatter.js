var generator = new Random (1);
var sd = 20, csd = 50;
var mean = 0, cmean = 125;

var paint = function() {
    this.x = width/2;
    this.y = height/2;
    this.col = fill(255, 0, 0);
};

paint.prototype.rainbow = function() {
    var c = generator.nextGaussian();
    var c1 = generator.nextGaussian();
    var c2 = generator.nextGaussian();
    
    var r1 = c*csd + cmean;
    var g1= c1*csd + cmean;
    var b1 = c2*csd + cmean;
    
    this.col = fill(r1, g1, b1);
};

paint.prototype.walk = function () {
    var num = generator.nextGaussian();
    var num1 = generator.nextGaussian();
    
    var nx = num*sd + mean;
    var ny = num1*sd + mean;
     
    this.x += nx;
    this.y += ny;
    
    noStroke();
    ellipse(this.x,this.y,10,10);
    
    this.x = width/2;
    this.y = height/2;
};


var picture = new paint ();

draw = function() {
    picture.rainbow();
    
    picture.walk();
};

