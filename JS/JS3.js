//                          Loops and Strings

let itr = 4;
console.log("Iteration", itr);

// @@@@@@@@@@@@@ FOR LOOP @@@@@@@@@@@@@
for(i=0; i<itr; i++){
    console.log(i,"Loop");
}

// @@@@@@@@@@@@@ WHILE LOOP @@@@@@@@@@@@@
itr = 3;
while(itr > 0){
    console.log(itr,"While Loop");
    itr--;
}

// @@@@@@@@@@@@@ DO WHILE LOOP @@@@@@@@@@@@@
itr = 0;
do{
    console.log(itr, "Do While Loop");
    itr++;
}while(itr <= 2);


// @@@@@@@@@@@@@ FOR-OF LOOP : For the string values @@@@@@@@@@@@@
let str = "Akash";
for(let i of str){
    console.log(i);
}

// @@@@@@@@@@@@@ FOR-IN LOOP : For Objects @@@@@@@@@@@@@
let studs = {
    Name : "Akash",
    Class: "XII",
    Marks: 98,
    IsPass: true
}

for(let item in studs){
    console.log(item,": ",studs[item]);
}

// @@@@@@@@@@@@@ Questions @@@@@@@@@@@@@
// Qs1. Print all even numbers from 0 to 10.
let num = 10;
console.log("Even Numbers :");
for(let i = 0; i< num; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}

//Q2: Create a game where you start with any random game number. Ask the user to keep
// guessing the game number until the user enters correct value.

let randomGameNumber = 4;
let input = 4;
do{
    //input = prompt("Guess Number:"); // disabled
}while(input != randomGameNumber);

console.log(input, "Congradulations You win!!");


// @@@@@@@@@@@@@ STRINGS @@@@@@@@@@@@@

let str1 = "Akash"; // Double quotes
let str2 = 'Rushikesh'; // Single quotes

// Length
console.log("Length of :", str1, " is:", str1.length);
console.log("Length of :", str2, " is:", str2.length);

// indexing
console.log("str1[0]: ",str1[0]);
console.log("str2[0]: ",str2[0]);

// Template literals using string interpolation
let obj = {
    prod: "Pen",
    cost: 100
}

console.log("Price of the", obj.prod, "is", obj.cost);
console.log(`Price of the ${obj.prod} is ${obj.cost}`); // Using interpolation

// New Line & Tab in the string
console.log("Enter your Name:\tAkash"); // tab. While counting the length of string /t this count as 1
console.log("Enter your Name:\nAkash"); // new line. While counting the length of string /n this count as 1

// String methods 

let newData = "     Akash Warkhad     ";
console.log(`Original data: ${newData}`);
console.log(`Lower Case: ${newData.toLowerCase()}`);
console.log(`Upper Case: ${newData.toUpperCase()}`);

console.log(`Trim empty spaces from start & end: ${newData.trim()}`);

console.log(`Slice : ${newData.slice(0, 8)}`);
console.log(`Cocatinate : ${newData.concat(newData.toUpperCase())}`);
console.log(`Replace : ${newData.replace("W", "V")}`); // Only first time replace. use replaceAll which replace all data

console.log(`charAt(6) : ${newData.charAt(6)}`);


// @@@@@@@@@@@@@ Questions @@@@@@@@@@@@@
/*Qs1. Prompt the user to enter their full name. Generate a username for them based on the input.
Start username with @, followed by their full name and ending with the fullname length.
eg: user name =“shradhakhapra”, username should be “@shradhakhapra13” */

let userName = "AkashWarkhad";
userName = userName
console.log(`@${userName.toLowerCase()}${userName.length}`);
