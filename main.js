console.log('Hello World!');
console.log("Based on lecture 5");

function mr_coder() {
  console.log(" Bonjour! ");

}
mr_coder();

function miss(name) {
  console.log(" Annyeonghaseyo " + name + " !!!! ");
}

// GREET

var miss_1 = "RIYA";

miss(miss_1);

function new_person(age) {
  console.log(" Riya is " + age + "years old ");

}

var age = "26";
new_person(age);

// 1st OPERATOR

function solve(a, b) {

  console.log(" divide : " + a / b);
}
solve(32, 2);

// 2nd OPERATOR

function sum(b, c) {
  console.log(" multiply : " + b * c);
}
sum(369, 4667);

// 3rd OPERATOR

function add(d, e) {
  console.log(" ADD : " + d + e);
}
add(256, 757);
add(332, 556);
add();

// 4th OPERATOR

function sub(a, b) {
  var c = a / b;
  return c;
}

var result = sub(5, 4);
console.log(result);

// 5TH OPERATOR

function minus(a, b) {

  return a - b;
}

var minus_1 = minus(23, 3);
console.log(minus_1);

// USE CASE 1

function toHector(jdhh) {

  console.log(jdhh + [88 / 22] * [32 - 2]);
}

var jdhh = "  solution =>"
toHector(jdhh);

// USE CASE 2

function toCelsius(fahrenheit) {
  return ([5 / 9] * [fahrenheit - 32]);
}

var x = toCelsius(77);
var text = "  The temperature is  " + x + " degree " + " Celsius ";
console.log(text);