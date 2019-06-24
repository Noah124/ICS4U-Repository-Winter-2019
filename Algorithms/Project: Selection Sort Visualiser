var displayArray = function(array,loops,num1,num2,min) {
    textSize(12);
    fill(255, 0, 0);
    
    for (var i = 0; i<array.length;i++) {
            text(array[i],i*20+40*num1,30*loops+30*num2);
    }
    
    
    //If the (i) value and the minimum are not the same, create a line
    if(loops !== min) {
        //line(min*20+40*num1,30*loops+30*num2,200,200);
        line(min*20+40*num1,30*loops+30*num2,loops*20+40*num1,30*(loops+1)+30*num2);
    }
    
};

var swap = function(array, firstIndex, secondIndex) {
    //Swaps minimum and the first (i) value
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

var indexOfMinimum = function(array, startIndex) {
    //Finds the minimum value from the start index and the remainder of the array
    var minValue = array[startIndex];
    var minIndex = startIndex;

    for(var i = minIndex + 1; i < array.length; i++) {
        if(array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    } 
    return minIndex;
}; 

var selectionSort = function(array,num1,num2) {
   var two;
   //Goes through entire array, swapping the "i" position with the minimum value 
   for(var i = 0; i < array.length; i++) {
        two = indexOfMinimum(array,i);
        displayArray(array,i,num1,num2,two);
        swap(array,i,two);
   }
};


background(0,255,0);

//Creating four different arrays

var array1 = [2,9,1,4,7,6];
selectionSort(array1,1,1);

var array2 = [9,8,7,6,5,4];
selectionSort(array2,6,1);

var array3 = [8,8,7,6,6,4];
selectionSort(array3,1,8);

var array4 = [1,2,3,4,6,5];
selectionSort(array4,6,8);
