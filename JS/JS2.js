//                                               Operator in the JS

// Alert on the page
//alert("Alert : Lets begin:");

//This is Comment 

/*Multiline comments 
can be done by this way*/



// @@@@@@@@@@@@@ Arthmetic Opearator  @@@@@@@@@@@@@
let A = 7;
let B = 3;
console.log("a =", A);
console.log("b =", B);

console.log("a + b =", A + B);
console.log("a - b =", A - B);
console.log("a * b =", A * B);
console.log("a / b =", A / B);
console.log("a % (Modulo) b =", A % B); // show reminder
console.log("a ** b =", A ** B); // a to the power b

// @@@@@@@@@@@@@  Unary Operator  @@@@@@@@@@@@@
let cnt = 0;
console.log(cnt);

cnt++ // ++cnt
console.log("cnt++ =",cnt);

cnt-- // --cnt
console.log("cnt-- =",cnt);

// @@@@@@@@@@@@@  Asignment operator  @@@@@@@@@@@@@
let x = 5;
console.log("x =", x);

x += 1;
console.log("x + = 1 =", x);

// same of others operator

// @@@@@@@@@@@@@ Compairison Operator @@@@@@@@@@@@@

let p = 4;
let q = "4";

console.log("p = 4 & q = '4'");

console.log("p == q", p == q); // True
console.log("p != q", p != q); // False

// To avoid the string & int value stictly use ===
console.log("p === q", p === q); // False string != int
console.log("p !== q", p !== q); // True

let m = 3; let n = 4;
console.log("m = 3 & n = 4");
console.log("m < n", m < n); // True
 // same for <, <=, >, >= 
 
// @@@@@@@@@@@@@ Logical Operator @@@@@@@@@@@@@
//Logical And(&&),  OR(||),  Not (!)

console.log("true && true =", true && true); // true
console.log("true && false =", true && false); // false
console.log("false && false =", false && false); // false

console.log("true || true =", true && true); // true
console.log("true || false =", true && true); // true
console.log("false || false =", false && false); // false

console.log("!true =", !true); // false
console.log("!false =", !false); // true


// @@@@@@@@@@@@@ Conditional Statement @@@@@@@@@@@@@
let age = 36;
console.log("Age =", age);
if(age <= 20){
    console.log("Gen Z Age Group");
}
else if(age > 60){
    console.log("Senior citizen Group");
}
else{
    console.log("Middle Class Group");
}

// @@@@@@@@@@@@@ Ternary Statement @@@@@@@@@@@@@
console.log("isVotter", age > 18 ? true : false);

// @@@@@@@@@@@@@ Question @@@@@@@@@@@@@
/*Qs1. Get user to input a number using prompt(“Enter a number:”). Check if the number is
a multiple of 5 or not. */

//let number = prompt("Enter a number :");
number = 10;
if(number % 5 == 0){
    console.log(number, "is multiple of 5");
}
else{
    console.log(number, "is not multiple of 5",);
}


// Qs2. Write a code which can give grades to students according to their scores:
// 90-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

//let score = prompt("Enter Score (0 to 100):");
let score = 90;
console.log("Entered Score :", score);

if(score >= 90 && score <= 100){
    console.log("Result: A Grade");
}
else if(score >= 70 && score <= 89){
    console.log("Result: B Grade");
}
else if(score >= 60 && score <= 69){
    console.log("Result: C Grade");
}
else if(score >= 50 && score <= 59){
    console.log("Result: D Grade");
}
else{
    console.log("Result: F Grade");
}
