//           ##################### 1. Variables & Data Types   #####################
console.log("##################### 1. Variables & Data Types   #####################");

console.log("Hi Akash this side!!");
console.log("How are you?");

//-------------------------------------------------------------------------------------
//                    ##  Var keyword (Global Scope & Can be redeclared)  ##
var varFullName = "Akash";
console.log(varFullName);

var varFullName = "Akash Warkhad" // redeclared again
console.log(varFullName);

//-------------------------------------------------------------------------------------
//                  ##  let keyword (Block Scope & Not allowed Redeclaration)
let fullName = "Shubham";
console.log(fullName);
//let fullName = "sksm"; <- Redeclaration is not allowd in the 
fullName = "Shubham Warkhad" // Updation allowed
console.log(fullName);

//-------------------------------------------------------------------------------------
//                 ## const Keyword (Block Scope & updation & Redeclaration not allowed)
const pi = 3.14;
console.log(pi);
//pi = 3.1234; // Get runtime error
//var pi = 3444; // Not allowed

//-------------------------------------------------------------------------------------
//              ## Uninitialised var let & cost values ## 
var a;
let b;
//const c; <- must be initialise

console.log(a); // o/p : undefined
console.log(b); // o/p : undefined

//-------------------------------------------------------------------------------------
//          ## Data Types In JS  ##

// Primitive Types : Number, String, Boolean, Undefined, Null, BigInt, Symbol
age = 10;
console.log("DataType :", typeof(age)) // number
console.log(age);

Name = "Akash"
console.log("DataType : ", typeof(Name)); // string
console.log(Name);

flag = true;
console.log("DataType : ",typeof(flag)); // boolean
console.log(flag);

let data;
console.log("DataType : ",typeof(data)); // undefined
console.log(data);

nullData = null;
console.log("DataType : ",typeof(nullData)); // object
console.log(nullData) // null

value = BigInt("1234563456789");
console.log("DataType : ", typeof(value)); // bigint
console.log(value); //1234563456789n

sym = Symbol("Hii!");
console.log("DataType : ", typeof(sym)); //Symbol(Hii!)
console.log(sym);

// ###################### Non Primitive Types : object, array/collection, function ######################
console.log("############ Non Primitive Types :  object, array/collection, function ############");

const Student = {
    Name: "Akash Warkhad",
    Age: 25,
    CGPA: 8.6,
    IsPass: true
}

console.log("DataType : ", typeof(Student));
console.log(Student);
console.log(Student["Name"]); // Akash Warkhad
console.log(Student[Name]); // undefined XX 
console.log(Student.Name);    // Akash Warkhad

console.log(Student.Age); // 25
Student.Age = Student.Age + 1;
console.log(Student.Age);  // 26

//-------------------------------------------------------------------------------------
let StudentArray = 
[
    {
        Name: "Akash Warkhad",
        Age: 25,
        CGPA: 8.6,
        IsPass: true
    },
    {
        Name: "Shubham Warkhad",
        Age: 30,
        CGPA: 4.3,
        IsPass: false
    }
]

console.log("DataType : ", typeof(StudentArray)); // object
console.log("StudentCollection : ", StudentArray);
console.log("Oth Collection : ", StudentArray[0]);
console.log("Name : ", StudentArray[0].Name);

console.log("Why Function is DataType in JS? ");
console.log("Yes. Function is a special type of object in JavaScript. It is a first-class citizen, " +
"meaning it can be assigned to variables, passed as arguments, and returned from other functions.");

var func = function functionDataType() {
    console.log("Function is also one of the dataType of JS.")
}

console.log("DataType of Function: ", typeof(func)); // function

console.log("Primitive vs Reference (Very Important)");

console.log("Primitive → Copy by Value Example:");
let d1 = 10;
let d2 = d1;
d2 = 20;
console.log(d1); // 10

console.log("Reference → Copy by Reference Example: ");
let obj1 = { name: "Akash" };
let obj2 = obj1;

obj2.name = "John";

console.log(obj1.name); // "John"