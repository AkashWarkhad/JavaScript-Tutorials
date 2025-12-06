//           #####################  Classes And Objectes   #####################  
window.console.log("#####################  Classes And Objectes   ##################### \n");

// A javaScript object is an entity having state and behavior (properties and method).
// JS objects have a special property called prototype. & We can set prototype using _ _ proto _ _ <- IMP

//    ##########################  Objects  ##############################
let student = 
{
    fullName: "Akash Warkhad",
    marks: 90,

    printMarks: function () 
    {            // Method 1 to define functions
        return `Marks = ${this.marks}`;
    },

    standard: "XII",

    isPass()
    {                           // Method 2 to define functions
        return this.marks >= 35 ? true : false;
    }
}

console.log("Student Object :", student);
console.log("Student State/Properties :", student.fullName);    // State/Properties
console.log("Student Behavior/Method :", student.printMarks()); // Behavior/Method
console.log("Method Content :", student.printMarks);            // Content of the method
console.log("Is Pass: ", student.isPass());

//   ###############  Access ProtoType ################
let tax = 
{
    calTax()
    {
        return `10% tax will be applied to salary`;
    }
}

let emp1 = {
    salary: "25k",
    empName: "Akash"
}

emp1.__proto__ = tax;

console.log("Emp1 :", emp1);
console.log("Emp1 Can access calTax() now:", emp1.calTax());

//    ##########################  Classes  ##############################

class TataCarPlatform
{
    carCost;

    constructor (CarPrice)                             // Constructor
    {
        console.log("Creating a new car object");
        this.carCost = CarPrice                      // Set the fields through constructor
    }

    build(carName){
        console.log(`Build ${carName} Car with ${this.carCost} costing.`);
    }

    startCar(){
        console.log("Start the Car!");
    }

    stopCar(){
        console.log("Stop the Car!");
    }
}

//Calling 
let altrozCar = new TataCarPlatform("15 Lakh");
console.log(altrozCar);
altrozCar.build("Altroz");
altrozCar.startCar();
altrozCar.stopCar();

//    ##########################  Inheritance  ##############################

class Person
{
    constructor()
    {
        this.species = "Homo sapiens";
    }

    Eat() {
        return "Eat meal";
    }

    Sleep(){
        return "Sleep";
    }

    work(){
        return "Do nothing";
    }
}

class Engineer extends Person
{
    work(){
        return "Engineer build the softwares.";
    }
}

class Doctor extends Person
{
    work()
    {
        return "Treat patients";
    }
}

//calling
let person = new Person();
console.log(`Person : ${person.Eat()} - ${person.work()} - ${person.Sleep()} & has ${person.species} species`);


let akash = new Engineer();
console.log(`Engineer : ${akash.Eat()} - ${akash.work()} - ${akash.Sleep()} & has ${person.species} species`);

let shubham = new Doctor();
console.log(`Doctor : ${shubham.Eat()} - ${shubham.work()} - ${shubham.Sleep()} & has ${person.species} species`);

//    ##########################  Supern Keyword  ##############################

// inheritance is passing down properties & methods from parent class to child class.

class Worker {
    constructor(name){
        this.Name = name;
        console.log("2.Parent ctor called!");
    }

    Work(){
       return this.Name + " Do the Work!"; 
    }
}

class Manager extends Worker
{
    constructor(name)
    {
        console.log("1. Child ctor called!");

        super(name + "Worker");        // Invoke the parent ctor
        
        this.Name = name;   // Asign this after Parent ctor invoked
        console.log("3.child ctor closed!")
    }

    Salary(){
        console.log(super.Work());   // Accessed Parent class methods through super keyword
        return "Got the 50K Salary per month";
    }
}

// Calling :

//super.method() → calls a method from the parent’s prototype
//super.property → does not read instance properties super.name is not allowed

let mngr = new Manager("Akash");
console.log("Manager:", mngr);

console.log(`Manager is ${mngr.Name} & ${mngr.Salary()}`)


//    ##########################  Practice Questions  ##############################

//Qs. You are creating a website for your college. Create a class User with 2 properties, name &
// email. It also has a method called viewData( ) that allows user to view website data.

class User {
    constructor(name, email)
    {
        this.name = name,
        this.email = email
    }

    name;
    email;

    viewData()
    {
        console.log(`User Data:- ${this.name}, Email:- ${this.email}`)
    }
}

// Calling
let user1 = new User("Rushi", "rushi@gmail.com");
user1.viewData();


// Qs. Create a new class called Admin which inherits from User. Add a new method called
//editData to Admin that allows it to edit website data.

class Admin extends User
{
    constructor(name, email){
        super(name, email);
    }

    EditData(newName, newEmail){
        console.log("# Updated the Data :");
        this.viewData(newName, newEmail);
    }

    viewData(name, email)
    {
        console.log(`User Data:- ${name}, Email:- ${email}`)
    }
}

// Calling

let adminUser = new Admin("Akash", "akash@gmail.com");
console.log("# User's ViewData :")
adminUser.viewData();                               //Calling Parent/User method

console.log("# Admin's ViewData :")
adminUser.viewData("Akash", "akash@gmail.com");

adminUser.EditData("Shubham", "shubham@gmail.com");


// ################################ Error Handling ##############################

console.log("a = 5 & b = 0");
try 
{
    let result = 5 / 0;
    console.log("Division Result :", result);
    throw new Exception("Error while dividing the number");
} 
catch (error) 
{
    console.log("Exception raised", error);
}