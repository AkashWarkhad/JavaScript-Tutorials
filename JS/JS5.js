// ####################################  Functions & Methods ####################################  

// @@@@@@ Create a function to calculate the area of the rectangle

function Area(length, width)  // Definition
{
    console.log(`Length : ${length} & Width: ${width}`);
    return length * width;
}

let area = Area(10, 5); // Calling function
console.log(`Area of the rectangle: ${area}`);

// @@@@@@ Arrow Functions (Compact way of writing a function)

const ArrowArea = (length, width)=> {
    console.log(`Length : ${length} & Width: ${width}`);
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


// ########################## forEach Loop in Arrays ##########################

