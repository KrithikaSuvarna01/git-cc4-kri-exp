//This file contans math calculations like addition subtraction multiplication, division and trignometry

/**
 * 
 * @param {*} a adds 2 numbers
 * @param {*} b 
 * @returns a result
 */
function add(a,b){
    return a+b
}

function sub(a,b){
    return a-b;
}
/**
 * 
 * @param {*} a multiplies 2 numbers
 * @param {*} b 
 * @returns a result
 */
function mul(a,b){
    return a*b
}
/**
 * This function will return a/b
 * @param {*} a 
 * @param {*} b 
 * @returns a value
 */
function div(a,b){
    return a/b;
}

function pow(a,b){
    let product=a;
    for(let i=0;i<b;i++){
        product=product*product;
    }
    return product;
}
