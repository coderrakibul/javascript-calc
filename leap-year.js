function isLeapYear(year){
    if(year % 4 ==0){
        return true;
    }
    else{
        return false;
    }
}

var thisYear = 2022;
var leapYear = isLeapYear(thisYear);
console.log(leapYear);


var thatYear = 2024;
var leapYear = isLeapYear(thatYear);
console.log("is that year leap year:", leapYear);