//           #####################  Events IN JS   #####################  
window.console.log("#####################  EVENTS   ##################### \n");

function Area(length, Width)
{
    return length * Width;
}

var area = 0;
let btn1 = document.querySelector("#btn1");

btn1.onclick = () => {
    console.log("Lenght : 20cm, Width : 4cm");
    area = Area(20, 4);
    console.log("Area of the  Rectangle :", area);
}

//               ######### Event Object ##########
// It is a special object that has details about the event. 
// All event handlers have access to the Event Object's properties and methods.

btn1.ondblclick = (evtObj) =>{
    console.log(evtObj);
    console.log("Event Type:", evtObj.type);
    console.log("Event Target:", evtObj.target);
    console.log(`X Axis: ${evtObj.x} Y Axis: ${evtObj.y}`);
    console.log("Area of Rect:", evtObj.area);
}

//               #########  Event Listeners ############

let evtLisner = document.querySelector("#evtLisner");

let activate = (evt)=>{
    console.log("Event Type :", evt.type);
    console.log("Event handled by Event Listener");
    evtLisner.style.color = "yellow";
    evtLisner.style.fontSize = "25px";
    evtLisner.style.backgroundColor = "Red";
};

evtLisner.addEventListener("DOMActivate", activate);
evtLisner.addEventListener("dblclick", activate);

evtLisner.removeEventListener("DOMActivate", activate); // Now DOMActivate will not work

//Qs. Create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again.
let mode = document.querySelector("#mode");
let body = document.querySelector("body");

let env = "light";
 mode.addEventListener("click", ()=>{
    if(env === "light"){
        env = "dark";
        mode.innerText = "Dark Mode On";
        body.classList.remove("light");
        body.classList.add("dark");
    }
    else{
        env = "light";
        mode.innerText = "Light Mode On";
        body.classList.remove("dark");
        body.classList.add("light");
    }
 });