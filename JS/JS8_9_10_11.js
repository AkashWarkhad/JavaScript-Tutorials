//           #####################  Classes And Objectes   #####################  
window.console.log("#####################  Classes And Objectes   ##################### \n");

// A javaScript object is an entity having state and behavior (properties and method).
// JS objects have a special property called prototype. & We can set prototype using _ _ proto _ _ <- IMP

//    ##########################  Objects  ##############################
let student = {
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
