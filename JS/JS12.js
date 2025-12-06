//           #####################  Callbacks, Promises & Async Await   #####################  
window.console.log("#####################  Callbacks, Promises & Async Await   ##################### \n");
// Note : UnComments code to run
// async await >> promise chains >> callback hell

console.log("One");
console.log("Two");

// setTimeout(() =>
//     {
//     console.log("Print after 4 sec");  // Prints at the end 
// }, 4000);

console.log("Three");
console.log("Four");

// ################################ Callbacks ################################
// A callback is a function passed as an argument to another function.

function sum(a, b)
{
    console.log("Sum :", a + b);
}

function Calculator(a, b, callbackFun)
{
    callbackFun(a, b);
}

Calculator(5, 10, sum); // Passed a & b with function which we want to call.

// ################################ Callback Hell ################################
// Nested callbacks stacked below one another forming a pyramid structure.

function getData(id, nextGetData)
{
    // setTimeout(()=>
    //     {
    //         console.log(id);
    //         if(nextGetData)
    //         {
    //             nextGetData();
    //         }
    //     }, 2000);
}

// Calling hell
getData(1, ()=>
    {
        console.log("Fetching 2nd data...");
        getData(2, ()=> 
            {
                console.log("Fetching 3rd data...");
                getData(3, ()=> 
                    {
                        console.log("Fetching 4th data...");
                        getData(4);
                    })
            });
    });

// ################################ Promises ################################
//Promise is for “eventual” completion of task.
//A JavaScript Promise object can be:

//    Pending : the result is undefined
let pendingPromise = new Promise((resolve, reject) =>{
    console.log("Inprogres")
});
console.log(pendingPromise);

//    Resolved : the result is a value (fulfilled)
let resolvedPromise = new Promise((resolved, reject) => {
    resolved("200 OK Success!");
    console.log("Promise Resolved");
});
console.log(resolvedPromise);

//    Rejected : the result is an error object
let rejectedPromise = new Promise((resolve, reject) => {
    console.log("Promise Rejected");
    reject("400 Bad Request Failed!")
})
console.log(rejectedPromise);


// Example of the request is resolved after processing

function GetBookingStatus(bId, nextGetBookingStatus)
{
    // return new Promise((resolve, reject)=> {
    //     console.log("############### Fetching the BookingStatus...");
    //     setTimeout(()=> {
    //         resolve("200 OK Success!");
    //         console.log("BookingStatus is CONFIRMED !!");
    //         if(nextGetBookingStatus){
    //             nextGetBookingStatus();
    //         }
    //     }, 3000);
    // });
}

// Call GetBookingStatus
let initialPromise = GetBookingStatus("INDBID823283430");
console.log("Initial Promise :", initialPromise); // O/P Pending

// setTimeout(()=> {
//     console.log("Get Promise Status after 3 second processing... :", initialPromise); // O/P Fulfilled 
// }, 3000)


// Once Promise is resolved then what? -> .then()
const promise1 = ()=> 
    {
        console.log("####Promise1 Started!!");
        return new Promise((resolve, reject) => 
        {
            resolve("200 Ok Sucess");
        })
};

let fulfilledPromise = promise1();
fulfilledPromise.then((res) => 
    {
        console.log("Promise1 fulfilled!", res);
    });

// Once Promise is rejected then what? -> .catch()
const promise2 = ()=> 
    {
        console.log("####Promise2 Started!!");
        return new Promise((resolve, reject) => 
        {
            reject("500 Server Error Failed");
        })
    };

// Call
let failedPromise = promise2();

failedPromise.catch((err) => 
{
    console.log("Promise2 rejected!", err);
});


// Calling/Executing query one after another using Promise

let first = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(()=> {
            resolve("First Resolved Successfully!!");
        }, 5000);
    });
}

let second = () => {
    return new Promise((resolve, reject) => 
    {
        setTimeout(()=> {
            resolve("Second Resolved Successfully!!");
        }, 5000);
    });
}

//Method 1:  Call Promise
// console.log("Fetching first Promise..");
// first().then((res1)=> 
// {
//     console.log("First Promise :", res1);
//     console.log("Fetching Second Prmoise..");
//     second().then((res2)=> 
//     {
//         console.log("Second Promise: ", res2);
//     })
// });

//Method 2 :By Promise Chaining

first()
.then((res1)=>{
    console.log("First Promise :", res1);
    return second();
})
.then((res2)=> {
    console.log("Second Promise: ", res2);
});



// ################################## Async-Await ##################################
//async function always returns a promise. await pauses the execution of its surrounding async function until the promise is settled.

function GetData(id){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            console.log("Data Id: ", id);
            resolve("200 Ok!");
        }, 2000);
    })
}

async function GetAllDataAsync(){
    console.log("Getting 1st BookingId :");
    await GetData(1);

    console.log("Getting 2nd BookingId :");
    await GetData(2);

    console.log("Getting 3rd BookingId :");
    await GetData(3);
}

//GetAllDataAsync(); // Here we needs to call the GetData call inside the GetAllDataAsync()



// ################### IIFE : Immediately Invoked Function Expression ####################################
// IIFE is a function that is called immediately as soon as it is defined.
// async function GetAllDataAsync(){
// console.log("Getting 1st BookingId :");
// await GetData(1);

// console.log("Getting 2nd BookingId :");
// await GetData(2);

// console.log("Getting 3rd BookingId :");
// await GetData(3);
// }

// Immdediatly call the the function & cannot be used again
(async function(){
    console.log("Getting 1st BookingId :");
    await GetData(1);

    console.log("Getting 2nd BookingId :");
    await GetData(2);

    console.log("Getting 3rd BookingId :");
    await GetData(3);
})();