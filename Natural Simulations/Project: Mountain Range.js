background(194, 237, 237);

var range = function (h,r,g,b,noi) {
    //y coordinate for mountain range
    this.h = h;
    
    //color values
    this.r = r;
    this.g = g;
    this.b = b;
    
    
    //starting noise value
    this.noi = noi;
};

range.prototype.mountain = function() {
    stroke(this.r, this.g, this.b);
    
    var incAmount = 0.01;
    var how = this.h;
    
    for (var t = 0; t < incAmount*width; t += incAmount) {
        var n = noise(this.noi+=t*0.02);
        var y = map(n, 0, 1, 0, height/2);
        rect(t*100, height-y-how, 1, y+how);
    }
};

var one = new range (0,40,100,75,8000);

var two = new range (40,100,240,12,200);

var three = new range (100,200,130,220,5000);

three.mountain();

two.mountain();

one.mountain();

image(getImage("avatars/aqualine-ultimate"),noise(1000)*400,noise(5000)*400,100,100);
