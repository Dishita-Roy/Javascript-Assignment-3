// Q.1
let v1 = 'europe';
let v2 = true;
let v3;
let v4 = null;
console.log(typeof v1);
console.log(typeof v2);
console.log(typeof v3);
console.log(typeof v4);

// Q.2
let firstname = `dishita`;
let lastname = `roy`;
let maritalstatus = `single`;
let country = `india`;
let age = 25;

console.log(`firstname is ${firstname}`);
console.log(`lastname is ${lastname}`);
console.log(`maritalstatus is ${maritalstatus}`);
console.log(`country is ${country}`);
console.log(`age is ${age}`);

//Q.3
let xyz = "hello world";
let result = xyz.toUpperCase();

console.log(result);

//Q.4
let text = "hello its java Script";
let result2 = text.includes("Script");

console.log(result2);

//Q.5
let text2 = "How are you";
const myArray = text2.split(" ");

console.log(myArray);

//Q.6
let arr = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
let newarr = arr.split(',');
console.log(newarr);

//Q.7
const fruits = ["Apple", "Orange", "Apple", "Mango"];
let index = fruits.lastIndexOf("Orange");

console.log(index);

//Q.8
let text3 = "You cannot end a sentence with because because is a conjunction";
let position = text3.search("because");

console.log(position);

//Q.9
let string = "  hello  ";
let text4 = string.trim();
//console.log(string);
console.log(text4);

//Q.10
var isMorning = true;
var isDayTime = false;

if (isMorning === true && isDayTime === false ) {
   console.log("Good Morning");
  } else if (isMorning === false && isDayTime === true ) {
    console.log("Good afternoon");
  }  else {
    console.log("Good night");
  }


var isMorning = true;
var isDayTime = false;


 if (isMorning === true && isDayTime === true) {
    console.log("Good Morning");
  } else if (isMorning === false && isDayTime === true) {
    console.log("Good afternoon");
  } else  {
    console.log("the statement is false");
  } 

  //Q.11
  4 > 3 -true, 4 >= 3 -true, 4 < 3 -false, 4 <= 3 -false, 4 == 4 -true, 4 === 4 -true, 4 == '4' -true, 4 === '4' -false, 4 != 4 -false , 4 !== 4 -false , 4 != '4' -false

  /*console.log(4 > 3); console.log(4 >= 3); console.log(4 < 3); console.log(4 <= 3); console.log(4 == 4); console.log(4 === 4); console.log(4 == '4'); console.log(4 === '4'); console.log(4 != 4); console.log(4 !== 4); console.log(4 != '4');*/ 

  let text5 = "python";
  let length = text5.length;
  //console.log(length);
  let text6 = "jargon";
  let length2 = text6.length;
  //console.log(length2);
  console.log(length !== length2);

  //Q.12
  let date2 = new Date();
  let year = date2.getFullYear();
  //console.log(year);
  let date3 = new Date();
  let month2 = date3.getMonth();
  //console.log(month2);
  let date4 = new Date();
  let thisdate = date4.getDate();
  //console.log(thisdate);
  let date5 = new Date();
  let day = date5.getDay();
  //console.log(day);
  let date6 = new Date();
  let hours = date6.getHours();
  //console.log(hours);
  let date7 = new Date();
  let minute = date7.getMinutes();
  //console.log(minute);
  let date8 = new Date();
  let miliseconds = date8.getTime();
  console.log(miliseconds);

  //Q.13
let base = prompt(' base of a triangle: ');
let height = prompt(' height of a triangle: ');

let area = (base * height) / 2;

console.log( `The area of the triangle is ${area}`);

//Q.14
function m(x1, y1, x2, y2)
{
    if (x2 - x1 != 0)
    {
        return (y2 - y1) / (x2 - x1);
    }
    return Number.MAX_VALUE;
}
var x1 = 2;
var y1 = 2;
var x2 = 6;
var y2 = 10;
console.log("m is: " + m(x1, y1, x2, y2));

//Q.16
let radius = prompt ('radius of the circle is: ');
let PI = 3.14;
let area2 = Math.PI * radius * radius;
let perimeter = 2*Math.PI * radius;

console.log( `The area of the circle is ${area2}`);
console.log( `The perimeter of the circle is ${perimeter}`);

//Q.17
function dateFormater(date, separator) {
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();

  if (day < 10) {
    day = '0' + day;
  }
  if (month < 10) {
    month = '0' + month;
  }
  return year + separator + month + separator + day;
}

var now = new Date();
console.log('yyyy-mm-dd => ' + dateFormater(now, '-'));
console.log(now.toLocaleTimeString());


var date = new Date();
function dateFormater(date, separator) {
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();

  if (day < 10) {
    day = '0' + day;
  }
  if (month < 10) {
    month = '0' + month;
  }

  return day + separator + month + separator + year;
}

console.log("dd-mm-yyyy => " + dateFormater(date, '-'));
console.log(date.toLocaleTimeString());


var date = new Date();
console.log("dd-mm-yyyy => " + date.toLocaleDateString());
console.log(date.toLocaleTimeString());

//Q.18
let age2 = prompt("Enter your age: ");
if (age2 > 18){
          console.log('You are old enough to drive');
}
else {
  console.log("wait for the number of years you need to turn 18");
}

//Q.19
const number = 6;
const result3 = number % 4;
if(number % 2 == 0) {
  console.log("The number is even.");
}
else {
  console.log("The number is odd.");
}

//Q.20

let score = 78;

if (score >= 80 && score <= 100){
  console.log("your grade is A");
}
else if(score >= 70 && score <= 89){
  console.log("your grade is B");
}
else if(score >= 60 && score <= 69){
  console.log("your grade is C");
}
else if(score >= 50 && score <= 59){
  console.log("your grade is D");
}
else if(score >= 0 && score <=49) {
  console.log("your grade is F");
}

//Q.21
let month = "november";

if(month === 'march' || month === 'april' || month === 'may') {
  console.log("spring");
  }  
  else if(month === 'june' || month === 'july' || month ==='august') {
      console.log("Summer");
  } 
  else if (month === 'september' || month === 'october' || month === 'november') {
      console.log("Autumn");
  } 
   else if (month === 'december' || month === 'january' || month === 'february') {
      console.log("Winter");
  } 

  //Q.22
  let days = function(month,year) {
    return new Date(year, month, 0).getDate();
  };
  console.log(days(3, 2021));

  //Q.23
  let Month = prompt('Enter the month:');

  if ('January' === Month || 'March' === Month || 'May' === Month || 'July' === Month || 'Agust' === Month || 'October' === Month || 'December' === Month) {
  console.log(`${Month} has 31 days`)
  }
  else if ('February' === Month) {
  console.log(`${Month} has 29 days`);
  } 
  else if ('April' === Month || 'June' === Month || 'September' === Month || 'November' === Month) {
     console.log(`${Month} has 30 days`)
  }
  else{
  console.log('Re-Enter');
  }

  //Q.25
  const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
  if (shoppingCart != "Meat") {
    shoppingCart.unshift("Meat");  
}
console.log(shoppingCart);

if (shoppingCart != "sugar"){
  shoppingCart.push("Sugar");
}
console.log(shoppingCart);

delete shoppingCart[4];
console.log(shoppingCart);

shoppingCart[3] = "Green tea";
console.log(shoppingCart);

//Q.26
let countries = ["Spain", "UK", "Japan", "India"];
let check = countries.indexOf('Ethiopia');
if (check === -1){
  countries.unshift("Ethiopia");
  console.log(countries);
}
else{
  console.log("ETHIOPIA");
}

//Q.30
const btn = document.getElementById("button"); //targets a button created in HTML file

const random = () => {
    let val = "012345678ABCDEF";
    let cons = "#";
    for (let i=0; i<6; i++){
        cons = cons + val[Math.floor(Math.random()*16)];
    }
    return cons;
}


btn.addEventListener("click",change); 
function change(){       
    div.style.backgroundColor = random();
};




  

  


  

































