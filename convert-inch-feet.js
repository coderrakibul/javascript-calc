// inch to feet

function inchToFeet(inches){
    var feet = inches / 12;
    return feet;
}

var myInches = 132;
var myFeet = inchToFeet(myInches);
console.log(myFeet);

var yourInches = 156;
var myFeet = inchToFeet(yourInches);
console.log(myFeet);

//mile to kilometer

function mile(kiloMeter){
    var mile = kiloMeter * 1.60934;
    return mile;
}
var distance = 12;
var myMile = mile(distance);
console.log(myMile);