//Write a JavaScript program that displays the largest integer among two integers.
let num1 = 10;
let num2 = 20;

if(num1 > num2){
    console.log("num1 is largest", num1);
}
else if(num2 > num1){
    console.log("num2 is largest", num2);
}
else{
    console.log("both numbers are equal");
}

//Write a JavaScript program that computes the average marks of the following students. Then, this average is used to determine the corresponding grade.
let students = [
    {name:"jane", marks:80},
    {name:"ciara", marks:77},
    {name:"smith", marks:88},
    {name:"thomas", marks:95},
    {name:"shelby", marks:68},
]
let total = 0;
for(let  i=0; i<students.length; i++){
    total +=students[i].marks;
}
 let average = total/students.length;

 let grade;

 if(average<60){
    grade='F';
 }
 else if (average<70){
    grade = "D";
 }
 else if (average<80){
    grade = "C";
 }
 else if (average<90){
    grade = "B";
 }
 else if (average<100){
    grade = "A";
 }
 

 console.log("Grade is:", grade);
 console.log("average is:",average.toFixed(2));

 //Write a JavaScript program to get the difference between a given number and 13, if the number is broader than 13 return double the absolute difference
 let numb1 = 40;
 let numb2 = 30;

 let result = (numb1 === 50 || numb2 || (numb1 + numb2 ===50));
 console.log(result);

 //Write a JavaScript program to get the difference between a given number and 13, if the number is broader than 13 return double the absolute difference

 let number = 20;
 
 let difference;
 if(number<=13){
    difference = 13 - number;
 }else{
    difference = (number - 13)*2;
 }

 console.log("results:" ,difference);

 //Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters. The string length must be broader than or equal to 1.
 let gree = "Sparrow"

 if(gree.length<=1){
    console.log("string is too short to swap:", name);
 }
 else{
    let firstchar = gree[0];
    let lastchar = gree[gree.length-1];
    let middlechar = gree.slice(1,gree.length-1);

    let newString = lastchar + middlechar + firstchar;

    console.log("new string is: ", newString);
 }
 
 // Write a JavaScript program to find the largest of three given integers
let numbe1 = 15;
let numbe2 = 42;
let numbe3 = 27;

let largest;

if (numbe1 >= numbe2 && numbe1>=numbe3){
    largest = numbe1;
}
else if (numbe2 >=numbe1 && numbe2 >=numbe3){
    largest = numbe2
}
else{
    largest = numbe3
}
console.log("the largest is: ", largest);

//Write a JavaScript program that checks whether the last digit of three positive integers is the same.
let nm1 = 39;
let nm2 = 44;
let nm3 = 57;

let last1 = nm1%10;
let last2 = nm2 % 10;
let last3 = nm3%10;

if(last1 === last2 && last2 == last3){
   console.log("all last digits are same: ");
}
else{
   console.log("they are not same")
}

// Write a JavaScript program to check whether all the digits in a given number are the same or not.

let numbr = 7777; 
let nmStr = numbr.toString();
let firstDigit = nmStr[0];

let allSame = true;
for (let i = 1; i < nmStr.length; i++) {
  if (nmStr[i] !== firstDigit) {
    allSame = false;
    break; 
  }
}

if (allSame) {
  console.log("All digits are the same");
} else {
  console.log("Digits are not all the same");
}