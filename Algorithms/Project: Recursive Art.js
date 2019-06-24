var drawShape = function(x, y, radius, counter) {
    
    //Updates line and fill colour with each recursion
    stroke(x, y, radius);
    fill(y, x, radius);
    
    //draw a circle
    ellipse(x, y, radius, radius);
    
    //alternate side rectangle is drawn on
    if( counter%2 === 0) {
        rect(x,y,radius,radius);
    } else if(counter%2 === 1) {
        rect(x,y,-radius,radius);
    }
    
    //update radius
    var newRadius = radius/2;
    //update counter the rectangle uses
    counter +=1;
    
    //Base case
    if (newRadius >= 4) {
        //recurring the function
        drawShape(x, y, newRadius,counter);
        
        drawShape(x+40,y+40,newRadius,counter);
        drawShape(x-40,y-40,newRadius,counter);
        
        drawShape(x-40,y+40,newRadius,counter);
        drawShape(x+40,y-40,newRadius,counter);
    }
};


drawShape(width/2, height/2, 380, 0);
