//           ##################### 8_9_10_11 Classes And Objectes   #####################  
window.console.log("##################### 8_9_10_11 Classes And Objectes   ##################### \n");

// A javaScript object is an entity having state and behavior (properties and method).
// JS objects have a special property called prototype. & We can set prototype using _ _ proto _ _ <- IMP

//    ##########################  Objects  ##############################
let student = 
{
    fullName: "Akash Warkhad",
    marks: 90,

    // Method1 to define function
    printMarks: function () 
    {
        return `Marks = ${this.marks}`;
    },

    standard: "XII",

    // Method2 to define function
    isPass()
    {                           
        return this.marks >= 35 ? true : false;
    }
};

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
};

let emp1 = 
{
    salary: "200k",
    empName: "Akash"
};

// Attaching tax with Emp
emp1.__proto__ = tax;

console.log("Emp1 :", emp1);
console.log("Emp1 Can access calTax() now:", emp1.calTax());

//    ##########################  Classes  ##############################

class TataCarPlatform
{
    // Optional to declare
    carName;
    carCost;

    constructor (carName, carPrice)                             // Constructor
    {
        // Set the fields through constructor
        this.carName = carName;
        this.carCost = carPrice;  
        console.log("Creating a new car object");
    }

    build()
    {
        console.log(`Build ${this.carName} Car with ${this.carCost} costing.`);
    }

    startCar()
    {
        console.log(`Start the ${this.carName} Car!`);
    }

    stopCar()
    {
        console.log(`Stop the ${this.carName} Car!`);
    }
}

//Calling 
let altrozCar = new TataCarPlatform("Altroz", "15 Lakh");
altrozCar.build();
altrozCar.startCar();
altrozCar.stopCar();
console.log(altrozCar);

//    ##########################  Inheritance  ##############################

class Person
{
    // Optional
    Gender;
    constructor(Gender = "Unknown")
    {
        this.Gender = Gender;
    }

    Eat() 
    {
        return "Eat meal";
    }

    Sleep()
    {
        return "Sleep";
    }

    work()
    {
        return "Do nothing";
    }
}

class Engineer extends Person
{
    work()
    {
        return "Engineer's build the softwares.";
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
console.log(`Person : ${person.Eat()} - ${person.work()} - ${person.Sleep()} & Its Gender : ${person.Gender}`);

let engineer = new Engineer("Male");
console.log(`Engineer : ${engineer.Eat()} - ${engineer.work()} - ${engineer.Sleep()} & Its Gender : ${engineer.Gender}`);

let doctor = new Doctor("Female");
console.log(`Doctor : ${doctor.Eat()} - ${doctor.work()} - ${doctor.Sleep()} & Its Gender : ${doctor.Gender}`);

//    ##########################  Supern Keyword  ##############################

// inheritance is passing down properties & methods from parent class to child class
//And the super keyword is used to call the constructor of its parent class to access the parent's properties and methods.

class Worker 
{
    name; // Public
    #privateName // Private (# start)
    static staticName // Static
    constructor(name)
    {
        this.name = name;
        this.#privateName = "private_" + name;
        this.staticName = "Static_" + name;
        console.log("2.Parent ctor called!");
    }

    Work()
    {
        // this.name is referenced from child class as name present their as well
       return `Public:${this.name}, Private:${this.#privateName}, Static:${this.staticName} Do the Work!`; 
    }
}

class Manager extends Worker
{
    constructor(name)
    {
        console.log("1. Child ctor called!");

        super(name + "SE");        // Invoke the parent ctor
        
        this.name = name;   // Asign this after Parent ctor invoked
        console.log("3.child ctor closed!")
    }

    Salary()
    {
        console.log(super.Work());   // Accessed Parent class methods through super keyword
        return "Got the 50K Salary per month";
    }
}

// Calling :

//super.method() calls a method from the parent’s prototype
//super.property does not read instance properties super.name is not allowed

let mngr = new Manager("Akash");
console.log("Manager:", mngr);

console.log(`Manager is ${mngr.name} & ${mngr.Salary()}`) // mngr.name this from child class

//    ##########################  Practice Questions  ##############################

//Qs. You are creating a website for your college. Create a class User with 2 properties, name &
// email. It also has a method called viewData( ) that allows user to view website data.

class User 
{
    // Note : Declaration of name & email is not required
    constructor(name, email)
    {
        this.name = name,
        this.email = email
    }

    login() 
    {
    console.log(`${this.name} logged in with Mail Addr :${this.email}.`);
    }

  logout() 
  {
    console.log(`${this.name} logged out with Mail Addr :${this.email}.`);
  }
}

// Calling
let user1 = new User("Rushi", "rushi@gmail.com");
user1.login();
user1.logout();


// Qs. Create a new class called Admin which inherits from User. Add a new method called
//editData to Admin that allows it to edit website data.

class Admin extends User
{
    constructor(name, email)
    {
        super(name, email);
    }

    editData() 
    {
        console.log(`${this.name} is editing website data with Mail Addr :${this.email}.`);
    }
}

// Calling
const admin1 = new Admin("Akash", "akash@email.com");

admin1.login();     // Inherited from User
admin1.editData();  // From Admin
admin1.logout();    // Inherited


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