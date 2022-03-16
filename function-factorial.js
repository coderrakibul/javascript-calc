// for loop function factorial

function factorial(number){
    var fact = 1;
    for (var i = 1; i <= number; i++){
        fact = fact * i;
    }
    return fact;
}
var result = factorial(7);
console.log(result);

// while loop function factorial
function myFactorial (number){
    let factorial = 1;
    let i = 1;
    while(i <= number){
        factorial = factorial * i;
        i++;
    }
    return factorial;
}
const myFact = myFactorial(6);
console.log(myFact);
