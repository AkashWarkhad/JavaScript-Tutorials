//           #####################  DOM - Document Object Model   #####################  
window.console.log("#####################  DOM - Document Object Model   ##################### \n");

//window : The window property of a Window object points to the window object itself. It is a global object with lots of properties & methods.
// The window object represents an open window in a browser. It is browser’s object (not JavaScript’s)
// & is automatically created by browser.

// #############  DOM : Document Object Model  ################# 
// Use : Dynamic chnages on the website.. Note : In HTML always incluse the JS file at the bottom of the page so that DOM can load all the conetent from the Page.

console.log(window.document); // Prints the Code
console.dir(window.document); // Prints the objects inside the document

console.log(window.document.body.childNodes[1].innerText); // O/P : Hii welcome to JavaScript tutorial Inspect Page
document.body.childNodes[1].innerText = "Hii Welcome In JS tutorial For More Info Pls Inspect Page"; 

console.log(window.document.body.childNodes[1].innerText); // O/P: Hii Welcome In JS tutorial For More Info Pls Inspect Page


// #############  DOM Manipulation  ################# 
