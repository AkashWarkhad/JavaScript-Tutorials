//           ##################### 4. ARRAYS   ##################### 
console.log("##################### 4. ARRAYS   #####################");

let weekDays = ["Sun", "Mon", "Tues", "Wends", "Thurs", "Fri", "Sat"]; //string based Array
let marks = ["36", "90", "100"];                                       // Number based Array
let info = ["Akash", 86, "XII", "Pass", "12233444"]                   // Combination of both

console.log("info Array: " ,info);
console.log("Type of Info: ",typeof(info));

// @@@@@@@@@@@@@@@@ Indices @@@@@@@@@@@@@@@@

console.log("info[0]: ",info[0]);
console.log("info[1]: ",info[1]);

// Updation
info[0]= "AkashWarkhad";
console.log("info Updated: ",info);

// Print the array content

//Using For loop
console.log("marks: ", marks);
console.log("Print marks array using for loop");
for(let i=0; i< marks.length; i++)
{
    console.log(`${i}th Element is: ${marks[i]}`);
}

// Using for Of loop
console.log("Print marks array using for of loop");
for(let item of marks)
{
    console.log(item);
}

console.log("Print marks array using for in loop");
for(let item in marks)
{
    console.log(item,"th: ", marks[item]);
}

// @@@@@@@@@@@@@@@@ Arrays Methods @@@@@@@@@@@@@@@@

console.log(info);

// Add data to end
console.log("Add element in array from end");
info.push("blue");
console.log(info);

// Delete from end & return deleted item
console.log("Delete the element from the end")
var deletedInfo = info.pop();
console.log(`Deleted Item: ${deletedInfo}`);
console.log("Array After deletion :", info);

// Convert array into string
var stringArray = info.toString();
console.log(`When array converts into string then it comes with data separted by comma = '${stringArray}'`);
console.log(`Length of stringArray : ${stringArray.length}`);

// Concate the 2 arrays
let joinedArray = info.concat(marks);
console.log(joinedArray);
console.log(`size of the joinedArray ${joinedArray.length} == size of sum of info & marks ${info.length + marks.length}`);

// unshift() - Add to start
let newLength = joinedArray.unshift("FirstData");
console.log("Updated Array: ", joinedArray);
console.log(joinedArray, " Length of array after addition of element:", newLength);

// shift() deleted the first item
let deletedFirstItem = joinedArray.shift();
console.log(deletedFirstItem);
console.log("After deletion of first item using shift(): ", joinedArray);


// Slice( ) : returns a piece of the array
console.log("joinedArray: ", joinedArray);
let pieceArray = joinedArray.slice(0, info.length);
console.log("Slice Array 0 to 4th: ", pieceArray);

// Splice( ) : change original array (add, remove, replace)
let arr = [0, 1, 2, 3, 4, 5, 6, 7];
console.log("## Array : ", arr);

// splice(StartIndex: 1, CountWhichNeedsToReplace: 3, ActualDataToBeRepaced : [10], 20, "Akash")
arr.splice(1, 3, [10], 20, "Akash"); 
console.log("splice(StartIndex: 1, CountWhichNeedsToReplace: 3, ActualDataToBeRepaced : [10], 20, 'Akash'): \n" , arr);

arr.splice(1, 3); // Here From index 1 we have to replace nothing till 3 fields onwards means remove 2nd, 3rd & 4th values
console.log("Remove 2nd to 4th element from array using : arr.splice(1, 3): ", arr);

// @@@@@@@@@@@@@@@@ Questions @@@@@@@@@@@@@@@@
/* Qs. Create an array to store companies -> “Bloomberg”, “Microsoft”, “Uber”, “Google”, “IBM”, “Netflix”
a. Remove the first company from the array -> Shift()
b. Remove Uber & Add Ola in its place -> Splice(1, 1, "Ola")
c. Add Amazon at the end  -> push("Amazon")
*/

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log(`Original Array : ${companies}`);
companies.shift();
console.log(`Remove the first company from the array : ${companies}`);

companies.splice(1, 1, "Ola")
console.log(`Remove Uber & Add Ola in its place = ${companies}`);

companies.push("Amazon");
console.log(`Add Amazon at the end = ${companies}`);

// Qs2. For a given array with marks of students -> [85, 97, 44, 37, 76, 60] 
// Find the average marks of the entire class.

let studMarks = [85, 97, 44, 37, 76, 60];

let sum = 0;
for(let data of studMarks)
{
    console.log(sum, "+", data);
    sum += data;
    console.log(sum);
}
console.log("Final Sumation : ",sum);
let avg = sum / studMarks.length
console.log(`Avg of ${studMarks} is ${avg}`);

/*Qs. For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
All items have an offer of 10% OFF on them. Change the array to store final price after
applying offer. */

let prices = [250, 645, 300, 900, 50];
console.log("Original Prices: ", prices);
for(let itr in prices)
{
    prices[itr] = prices[itr] - prices[itr] * 0.1;
}
console.log("Prices after 10% disccount: " ,prices)