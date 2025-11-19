//           #####################  ARRAYS   ##################### 
console.log("#####################  ARRAYS   #####################");

let weekDays = ["Sun", "Mon", "Tues", "Wends", "Thurs", "Fri", "Sat"]; //string based Array
let marks = ["36", "90", "100"];                                       // Number based Array
let info = ["Akash", 86, "XII", "Pass", "12233444"]                   // Combination of both

console.log(info);
console.log(typeof(marks));

// @@@@@@@@@@@@@@@@ Indices @@@@@@@@@@@@@@@@

console.log(info[0]);
console.log(info[1]);

// Updation
info[0]= "AkashWarkhad";
console.log(info);

// Print the array content

for(let i=0; i< marks.length; i++){
    console.log(marks[i]);
}

for(let item of marks){
    console.log(item);
}

for(let item in marks){
    console.log(item,"th:", marks[item]);
}

// @@@@@@@@@@@@@@@@ Arrays Methods @@@@@@@@@@@@@@@@

console.log(info);

// Add data to end
info.push("blue");
console.log(info);

// Delete from end & return deleted item
var deletedInfo = info.pop(newData.length);
console.log(`Deleted Item: ${deletedInfo}`);

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
console.log(joinedArray);

// shift() deleted the first item
let deletedFirstItem = joinedArray.shift();
console.log(deletedFirstItem);

// Slice( ) : returns a piece of the array
let pieceArray = joinedArray.slice(0, info.length);
console.log(pieceArray);

// Splice( ) : change original array (add, remove, replace)
let arr = [0, 1, 2, 3, 4, 5, 6, 7];
console.log(arr);

// splice(StartIndex: 1, CountWhichNeedsToReplace: 3, ActualDataToBeRepaced : [10], 20, "Akash")
arr.splice(1, 3, [10], 20, "Akash"); 
console.log(arr);

arr.splice(1, 3); // Here From index 1 we have to replace nothing till 3 fields onwards means remove 2nd, 3rd & 4th values
console.log(arr);

// @@@@@@@@@@@@@@@@ Questions @@@@@@@@@@@@@@@@
/* Qs. Create an array to store companies -> “Bloomberg”, “Microsoft”, “Uber”, “Google”, “IBM”, “Netflix”
a. Remove the first company from the array
b. Remove Uber & Add Ola in its place
c. Add Amazon at the end */

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log(`Original Array : ${companies}`);
companies.shift();
console.log(`Remove the first company from the array : ${companies}`);

companies.splice(1, 1, "Ola")
console.log(`Remove Uber & Add Ola in its place = ${companies}`);

companies.push("Amazon");
console.log(`Add Amazon at the end = ${companies}`);
