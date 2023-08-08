
//this js file contains trignometry function

function sine(x){
    var result=0.0;
    for(var i=0;i<100;i++){
        result+=(Math.pow(-1,i-1)*Math.pow(x,2*i-1))/Factorial(2*i-1);

    }
    return result;

}