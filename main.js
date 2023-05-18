// Old enough to drive option //

let folarinAge = parseInt(prompt("Enter your age"));
let driveDifference = 18 - folarinAge;

if (folarinAge > 18){
    console.log("You are old enough to drive");

}
else if(folarinAge < 18){
   console.log("You need to wait for" , driveDifference, "years", "to be able to drive");
}
else{
    console.log("You can drive");
}

let yourAge = parseInt(prompt("Enter your age"));
let myAge = 28;
let ageDifference1 = myAge - yourAge;
let ageDifference2 = yourAge - myAge;

if(myAge > yourAge){
    console.log("I am " , ageDifference1 , "years", "Older than you");
}
else if(yourAge > myAge){
    console.log("You are", ageDifference2, "years", "older than me");
}
else{
    console.log("We are of the same age");
}

let a = 4;
let b = 3;
let compare = a > b ? "a is greater than b" : "b is greater"
console.log(compare);

if(a > b){
    console.log("a is greater than b");

}
else if(b > a){
    console.log("b is greater");
}
else{
    console.log("Equal mfs");
}

let randomNumber = parseInt(prompt("Enter a number"));

if (randomNumber % 2 === 0){
    console.log  (randomNumber,"is an even number");
}
else{
    console.log(randomNumber,"it is an odd number");
}

let studentScore = parseInt(prompt("Enter the student score"));

if(studentScore >= 80 && studentScore ===100){
    console.log("A");
}
else if(studentScore > 69 && studentScore < 90){
    console.log("B");
}
else if(studentScore > 59 && studentScore < 70){
    console.log("C");
}
else if(studentScore> 49 && studentScore < 60){
    console.log("D");
}
else{
    console.log("F");
}

let months = ["January", "Febuary", "March", "April", "May", "June","July", "August","September", "October","November","December"];
let newMonth = prompt("Enter a month");

if (newMonth == months[8] || newMonth== months[9] || newMonth == months[10]){
    console.log("The period is autumn");
}
else if (newMonth == months[11] || newMonth == months[0] || newMonth == months[1]){
    console.log("The period is Winter");
}
else if(newMonth == months[2] || newMonth == months[3] || newMonth == months[4]){
    console.log("The period is spring");
}
else{
    console.log("The period is Summer");
}

let weekTime =["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let weekPeriod = prompt("Enter the day");
if (weekPeriod == weekTime[5] || weekPeriod == weekTime[6]){
    console.log(weekPeriod,"Is a weekend e lo dougboh");
}
else{
    console.log( weekPeriod, "Is a working day");
}

function getDaysInMonth (month, year){
    return new Date(year , month ,0).getDate();
}
console.log (getDaysInMonth(9,2023));















