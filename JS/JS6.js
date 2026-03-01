//           ##################### 6 DOM - Document Object Model   #####################  
window.console.log("##################### 6 DOM - Document Object Model   ##################### \n");

//window : The window property of a Window object points to the window object itself. 
// It is a global object with lots of properties & methods.
// The window object represents an open window in a browser. It is browser’s object (not JavaScript’s)
// & is automatically created by browser.

//               #############  DOM : Document Object Model  ################# 
// Use : Dynamic chnages on the website.. Note : In HTML always incluse the JS file at the bottom of the page so that DOM can load all the conetent from the Page.

console.log("Log Document: Print the Code: ", window.document); // Prints the Code
console.dir("Dir Document: Print nested obj structure: "); 
console.log(window.document); // Prints the objects inside the document

let firstChildInnerText = window.document.body.childNodes[1].innerText;
console.log(firstChildInnerText); // O/P : Hi Welcome To JavaScript Tutorial!
document.body.childNodes[1].innerText = firstChildInnerText + " For More Info Pls Inspect The Page"; // Dot will be applied on style level (below style section)

console.log(window.document.body.childNodes[1].innerText); // O/P: Hi Welcome To JavaScript Tutorial! For More Info Pls Inspect The Page.


//      ##########################  DOM Manipulation  ############################## 
console.log("######## DOM Manipulation ########");

// 1. Selecting with id
console.log(document.getElementById("heading")); // Prints the code
console.dir(document.getElementById("heading")); // Prints the directory

// 2. Selectong with class
console.log(document.getElementsByClassName("paragraph")); // Prints the directory
console.dir(document.getElementsByClassName("paragraph")); // Prints the directory

// 3. Selecting By tag name
console.log(document.getElementsByTagName("button")); // Prints the directory
console.dir(document.getElementsByTagName("button")); // Prints the directory

// 4. Query Selector : Its works like universal selector #########
// Element selector
let firstElement = document.querySelector("p"); 
console.dir(`firstElement: ${firstElement}`);
console.log(firstElement);

let allElements = document.querySelectorAll("p");
console.log(allElements);

// Id Selector
let firstId = document.querySelector("#heading"); 
console.dir(`FirstId: ${firstId}`);
console.log(firstId);

let allIds = document.querySelectorAll("#heading");
console.log(allIds);

// Class Selector
let firstClass = document.querySelector(".paragraph");
console.dir(`First class : ${firstClass}`);
console.log(firstClass);

let allClass = document.querySelectorAll(".paragraph");
console.log(allClass);


//                             ####### DOM Properties ########
console.log("####### DOM Properties ########");
console.log("Reviweing Body tag with DOM Properties");

let node = document.querySelector("body");

// tagName : returns tag for element nodes
console.log("## Tag Name :--", node.tagName); // o/p Body

// innerText : returns the text content of the element and all its children
console.log("### InnerText :--", node.innerText);

// innerHTML : returns the plain text or HTML contents in the element
console.log("### InnerHTML :--", node.innerHTML);

// textContent : returns textual content even for hidden elements
console.log("### TextContent :--", node.textContent);


/*
Que What is difference between innerText and textContent?
---> innerText returns only visible text and respects CSS styling.
textContent returns all text content including hidden elements and is faster because it does not trigger layout reflow.
*/
const el = document.getElementById("innerTextVStextContent");
console.log("innerText VS textContent : ");
console.log(el.innerText); //o/p Visible_Text
console.log(el.textContent); //o/p Visible_Text *** Hidden ***

// Practice set questions
//Qs 1 . Create a H2 heading element with text - “Hello JavaScript”.Append “from Apna College students” to this text using JS.
console.log("//Qs 1 . Create a H2 heading element with text - “Hello JavaScript”.Append “from Apna College students” to this text using JS.");

let h2Content = document.querySelector("h2").innerText;
console.log(h2Content);

document.querySelector("h2").innerText = h2Content.concat(" From Students..");
console.log("after appending:", document.querySelector("h2").innerText);


// Qs. Create 3 divs with common class name - “box”.Access them & add some unique text to each of them.

console.log("Before : $$$$$", document.querySelector(".box").innerText);

document.querySelectorAll(".box").forEach((x, ind)=>
{
    x.innerText = "Hi this is " + ind + "th Box";
});

console.log("After : $$$$$", document.querySelector(".box").innerText);

//                     ################ DOM Attributes & Style ########################
console.log("################ DOM Attributes & Style ########################");
// Get Attributes : To get the attributes on the nodes

var h1Id = document.querySelector("h1");
console.log(h1Id);

console.log("Fetch Attributes :", h1Id.getAttributeNames());
console.log(h1Id.getAttribute("id")); // O/p : heading
console.log(h1Id.getAttribute("name")); // O/P : welcome

// Set the Attributes
//(id, class,names)selector,  selector name
h1Id.setAttribute("id", "newHeading");
console.log(h1Id);

console.log("## Style : ");
// Style
console.log(h1Id.style); //Prints all Style Data

h1Id.style.backgroundColor = "pink";
h1Id.style.border = "2px, solid, black";
h1Id.innerText = h1Id.innerText + ".";
console.log(h1Id.innerText);
console.log("Applied backgroundColor : ", h1Id.style.backgroundColor);
console.log(h1Id.style);

// Insert Element in the DOM structure
console.log("### Insset New Element Into DOM Structure.");

let newbtn = document.createElement("button");
newbtn.innerHTML = "Click To Submit";
newbtn.style.border = "2px, solid, black";
newbtn.style.backgroundColor = "gray";

let newpara = document.createElement("p");
newpara.style.backgroundColor = "yellow";
newpara.innerText = "Creating a new paragraph Element";
newpara.style.color = "red";

console.log(newbtn);
console.log(newpara);

//adds before the node (outside)
document.querySelector("div").before(newbtn);

//adds after the node (outside)
document.querySelector("div").after(newbtn);

// Append at the end
document.querySelector("body").append(newbtn);
document.querySelector("body").append(newpara);

// Append at the start
document.querySelector("body").prepend(newbtn);

// removes the node
document.querySelector("button").remove(); // Now you will not see the button in the page, as its removed.

// Appned the child at the end of the node
let para = document.createElement("p");
para.innerText = "Hi this is new line!";
para.style.backgroundColor = "red";

const paragraph = document.body.appendChild(para);

console.log(paragraph);

// Remove the Child
document.querySelector("body").removeChild(para);


// Practice Questions :
// Qs. Create a new button element. Give it a text “click me”, background color of red & text color of white. 
// Insert the button as the last element inside the body tag.

var btn1 = document.createElement("button");
btn1.innerText = "click me";
btn1.style.backgroundColor = "red";
btn1.style.color = "white";

document.querySelector("body").append(btn1);

// Qs. Create a <p> tag in html, give it a class & some styling. Now create a new class in CSS 
// and try to append this class to the <p> element.
//Did you notice, how you overwrite the class name when you add a new one? Solve this problem using classList

let classAttr = document.querySelector(".class");
console.log(classAttr);

console.log("New class Attribute:", classAttr.getAttribute("class"));
classAttr.setAttribute("class", "newClass");
console.log(classAttr.innerHTML);

// If you don't know the applied attributes then access using classList
let divInHtml = document.querySelector("div");
console.log("Attributes on the div Before:", divInHtml.classList);

// Remove the class as well
divInHtml.classList.remove("divContent");
console.log("Attributes on the div After", divInHtml.classList);