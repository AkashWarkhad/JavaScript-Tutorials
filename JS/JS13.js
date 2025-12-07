//           #####################  Fetch API with Project   #####################  
window.console.log("#####################  Fetch API with Project   ##################### \n");

//Fetch API provides an interface for fetching (sending/receiving) resources. Fetch method used to fetch resources
let catBtn = document.querySelector("#catBtn");
let catFact = document.querySelector("#catFact");
const url = "https://catfact.ninja/fact";

// ### Using Async-Await
const getFacts = async () => 
{
    let response = await fetch(url); // Wait until will get the response.
    console.log(response);
    let jsonData = await response.json();
    console.log("Data :", jsonData);
    catBtn.innerText = "Get Cat-Facts by Async"; 
    catFact.innerText = jsonData.fact;
}

// ### Using Promise
// function getFacts() 
// {
//     fetch(url)
//     .then((response)=> {
//         return response.json();
//     })
//     .then((jsonData)=> {
//         console.log("Json Data: ", jsonData);
//         catBtn.innerText = "Get Cat-Facts by Promise";
//         catFact.innerText = jsonData.fact;
//     })
// }

// Call
catBtn.addEventListener("click", getFacts); // Do not use () bracket as its run the function

 /*Terms : 
   ### AJAX : Asyncronous Javascript And Xml.
   ### AJAS : Asyncronous Javascript And Json.
   ### JSON : JavaScript Object Notation.
   ### Promise.json() : To covert the object into Json data.*/

// #################  Request & Response ###############
/* HTTP Verbs (Hyper Text Transfer Protocol) :
# Get : To retreive the existing stored record data.
# Post : To create a new record data.
# Put : To update the existing data record.
# Delete : Remove the existing record. 
# Patch : To Partial Update.

Status Code : 
# 200 : Request succeeded; most common success response
# 201 : Resource successfully created (POST)

# 400 : Bad request, Invalid input or malformed request
# 401 : Unauthorized, User not authenticated (token/login required)
# 403 : Forbidden, User authenticated but not allowed (no permission)
# 404 : Not Found, Resource does not exist

# 500 : Server crashed
# 503 : Server down
# 504 : Server too slow */

let postUrl = "https://jsonplaceholder.typicode.com/posts/1";
const CreatFacts = async () => 
{
    let response = await fetch(postUrl, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: 1,
            title: "Akash",
            body: "Engineer Job",
            userId: 99
        })
    });

    console.log("Response Promise : ", response);
    let data = await response.json();
    console.log("Response Content:", data);

}

CreatFacts();

