//           #####################  Variables & Data Types   #####################
console.log("#####################  Variables & Data Types   #####################");

console.log("Hi this is Akash this side!!");
console.log("How are you?");

//-------------------------------------------------------------------------------------
//                    ##  Var keyword (Global Scope & Redeclared)  ##
var varFullName = "Akash";
console.log(varFullName);

var varFullName = "Akash Warkhad"
console.log(varFullName);

//-------------------------------------------------------------------------------------
//                  ##  let keyword (Block Scope & Not allowed Redeclaration)
let fullName = "Shubham";
//let fullName = "sksm"; <- Redeclaration is not allowd in the let
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
console.log(age);
console.log(typeof(age)) // number

Name = "Akash"
console.log(Name);
console.log(typeof(Name)); // string

flag = true;
console.log(flag);
console.log(typeof(flag)); // boolean

let data;
console.log(typeof(data)); // undefined

nullData = null;
console.log(nullData) // null
console.log(typeof(nullData)); // object

var value = BigInt("1234563456789");
console.log(value); //1234563456789n
console.log(typeof(value)); // bigint

var sym = Symbol("Hii!");
console.log(sym);
console.log(typeof(sym)); //Symbol(Hii!)

// Non Primitive Types : object / collection
const Student = {
    Name: "Akash Warkhad",
    Age: 25,
    CGPA: 8.6,
    IsPass: true
}

console.log(Student);
console.log(typeof(Student)); // object
console.log(Student["Name"]); // Akash Warkhad
console.log(Student[Name]); // undefined XX 
console.log(Student.Name);    // Akash Warkhad

console.log(Student.Age); // 25
Student.Age = Student.Age + 1;
console.log(Student.Age);  // 26

//-------------------------------------------------------------------------------------
let StudentCollection = 
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

console.log(StudentCollection);
console.log(typeof(StudentCollection)); // object