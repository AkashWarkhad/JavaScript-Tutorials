//           ##################### 7 Events IN JS   #####################  
window.console.log("##################### 7 EVENTS   ##################### \n");
console.log("### > For EVENTS Check Event.html File.");

function AreaOfRect(length, Width)
{
    return length * Width;
}

let butn = document.querySelector("#butn");

butn.onclick = () => 
{
    console.log("Single Button Clicked !!!");
    console.log("Lenght : 20cm, Width : 4cm");
    console.log("Area of the  Rectangle :", AreaOfRect(20, 4));
}

//               ######### Event Object ##########
// It is a special object that has details about the event. 
// All event handlers have access to the Event Object's properties and methods.

butn.ondblclick = (evtObj) =>
{
    console.log("Double button clicked !!!");
    console.log(evtObj);
    console.log("Event Type:", evtObj.type);
    console.log("Event Target:", evtObj.target);
    console.log(`X Axis: ${evtObj.x} Y Axis: ${evtObj.y}`);
    console.log("Area of Rect:", AreaOfRect(10,20));
}

//               ######### Add Event Listeners ############

let eventLisner = document.querySelector("#evtLisner");

let domActivateEffect = (evt) =>
{
    console.log("Event Type :", evt.type);
    console.log("Event handled by domActivateEffect Listener!!");
    eventLisner.innerText = "DomActive Effect"
    eventLisner.style.color = "yellow";
    eventLisner.style.fontSize = "25px";
    eventLisner.style.backgroundColor = "Red";
};

let dbClickEffect = (evt) =>
{
    console.log("Event Type :", evt.type);
    console.log("Event handled by dbClickEffect Listener!!");
    eventLisner.innerText = "dbClicked Effect";
    eventLisner.style.color = "Green";
    eventLisner.style.fontSize = "40px";
    eventLisner.style.backgroundColor = "Blue";
};

eventLisner.addEventListener("DOMActivate", domActivateEffect); // Log Press
eventLisner.addEventListener("dblclick", dbClickEffect);        // Double button Clicked

eventLisner.removeEventListener("DOMActivate", domActivateEffect); // Now DOMActivate will not work

//Qs. Create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again.
let mode = document.querySelector("#mode");
let body = document.querySelector("body");

let env = "light";
 mode.addEventListener("click", ()=>
{
    if(env === "light")
    {
        env = "dark";
        mode.innerText = "Dark Mode On";
        body.classList.remove("light");
        body.classList.add("dark");
    }
    else
    {
        env = "light";
        mode.innerText = "Light Mode On";
        body.classList.remove("dark");
        body.classList.add("light");
    }
 });