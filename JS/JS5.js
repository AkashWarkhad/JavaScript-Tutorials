//           #####################  Functions & Methods   #####################  
console.log("#####################  Functions & Methods   #####################");

// @@@@@@ Create a function to calculate the area of the rectangle

function Area(length, width)  // Definition
{
    console.log(`Length : ${length} & Width: ${width}`);
    return length * width;
}

let area = Area(10, 5); // Calling function
console.log(`Area of the rectangle: ${area}`);

// @@@@@@ Arrow Functions (Compact way of writing a function)

let ArrowArea = (length, width) => 
{
    console.log(`With Arrow Function, Length : ${length} & Width: ${width}`);
    return length * width;
}

area = ArrowArea(10, 3); // Calling function
console.log(`Area of the rectangle : ${area}`);

// @@@@@@ Practice Questions @@@@@@@

// Qs1. Create a function using the “function” keyword that takes a String as an argument &
//returns the number of vowels in the string

function vowelsCount(stringData){
    let cnt = 0;
    const vowels = "aeiouAEIOU"
    for(let char of stringData){
        if(vowels.includes(char)){
            cnt++;
        }
    }

    console.log(`${stringData} presents ${cnt} vowels`);
}

// Calling
vowelsCount("AkashWarkhad");

// Qs. Create an arrow function to perform the same task

let vowelsCounts = (stringData)=> {
    let cnt = 0;
    const vowels = "aeiouAEIOU"
    for(let char of stringData){
        if(vowels.includes(char)){
            cnt++;
        }
    }

    console.log(`${stringData} presents ${cnt} vowels`);
}

// Calling
vowelsCounts("Rushikesh Warkhad");

// ########################## Function as a parameter ##########################

function PrintData(data){
    console.log(data);
}

function MainFunc(PrintData){
    return PrintData("Pass Function as parameter in the function");
}

var xyz = MainFunc(PrintData);
console.log(xyz); // undefined > PrintData is not retruns anything

// ########################## forEach Loop in Arrays ##########################

let arrNum = ["Pune", "Mumbai", "Hydrabad", "Chennai", "Baglore"];
console.log("Array :", arrNum);

// Higher order function : The function which call other funtion which call back under original function. eg below
arrNum.forEach((value, index, array)=> {
    console.log(`Data : ${value}, Index : ${index}, Array: ${array}`);
});

// OR
arrNum.forEach(x => PrintData(x));

// Qs. For a given array of numbers, print the square of each value using the forEach loop.

let numberArray = [2, 5, 6, 8];
numberArray.forEach(x=> console.log(`Square of(${x})= ${x**2}`));

// ########################## Some More Array Methods ##########################

// 1. MAP Method (like Select): Calls a defined callback function on each element of an array, and returns an array that contains the results.

var newArray = numberArray.map(x=> x ** 2);
console.log(`New Squar Array : ${newArray}`);

// 2. Filter Method (like Where): Returns the elements of an array that meet the condition specified in a callback function.
var filterArray = numberArray.filter(x=> x % 2 == 0);
console.log(`Even Numbers :${filterArray}`);

// 3. Reduce Method : Calls the specified callback function for all the elements in an array. 
//                    The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

let sumOfArray = numberArray.reduce((res, current) => {
    return res + current;
})

console.log(`Sum of array[${numberArray}] is ${sumOfArray}`);

// Find the largest element from the Array

var largestValue = numberArray.reduce((larg, curr)=> {
    return larg > curr ? larg : curr;
})

console.log(`Large number from array[${numberArray}] is ${largestValue}`);


// Qs. We are given array of marks of students. Filter out of the marks of students that scored 90+.
let marksArr = [98, 59, 80, 86, 68, 99, 40, 92];
console.log(`Marks Array : ${marksArr}`);

var filterData = marksArr.filter(x=> x > 90);
console.log(`students that scored 90+ : ${filterData}`);

// Qs. Take a number n as input from user. Create an array of numbers from 1 to n.
// Use the reduce method to calculate sum of all numbers in the array.
// Use the reduce method to calculate product of all numbers in the array.

var nSizeArray = [1, 2, 3, 4];

let sumOfnSizeArray = nSizeArray.reduce((sum, cur)=>
{
    return sum + cur;
})
console.log(`Sum of Array [${nSizeArray}] : ${sumOfnSizeArray}`);

let factorial = nSizeArray.reduce((prod, curr) =>{
    return prod * curr;
})
console.log(`Factorial of Array [${nSizeArray}] : ${factorial}`);
