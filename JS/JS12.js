/************************************************************
 *  JavaScript Async Concepts
 *  1. Callback
 *  2. Callback Hell
 *  3. Promise
 *  4. Promise Chaining
 *  5. Async / Await
 *  6. IIFE (Immediately Invoked Function Expression)
 ************************************************************/

console.log("##################### 12 JAVASCRIPT ASYNC CONCEPTS #####################\n");
window.console.log(" ========== Callbacks, Promises & Async Await  ========== \n");

/************************************************************
 *  1️⃣ CALLBACK
 *  A callback is a function passed as an argument
 *  to another function and executed later.
 * 
 * > Problem we are solving:
 *  - JavaScript is asynchronous.
 *  - We don’t know when an async task finishes.
 *  - So we pass a function (callback) to run after completion.
 *
 * > Problem:
 *  - If we need multiple sequential async calls,
 *  - code becomes nested and ugly & leads t0 callback hell.
 ************************************************************/

console.log("----- 1️⃣ CALLBACK -----");

function add(a, b) 
{
  console.log("1️⃣ Simple CallBack Sum:", a + b);
}

function calculator(a, b, callback) 
{
  //Your code & then Execute the callback function
  callback(a, b);
}

// Passing function as argument
calculator(5, 10, add);


/************************************************************
 *  2️⃣ CALLBACK HELL
 *  Nested callbacks creating pyramid structure.
 ************************************************************/

console.log("\n----- 2️⃣ CALLBACK HELL -----");

function fetchData(id, nextStep) 
{
  setTimeout(() => 
    {
        console.log(`2️⃣ CallBack Hell: Fetched Data ID: ${id}`);

        if (nextStep) 
        {
            nextStep();
        }
    }, 0); // Temp set 0
}

// Calling: Nested structure (Pyramid)

fetchData(1, () => {
  fetchData(2, () => {
    fetchData(3, () => {
      fetchData(4);
    });
  });
});

console.log("2️⃣ Callback Hell Data Fetching completed!!");


/************************************************************
 *  3️⃣ PROMISE
 *  Promise represents eventual completion of async task.
 *  States:
 *   - Pending
 *   - Fulfilled
 *   - Rejected
 * > What improved?
 *  - No more nested callbacks
 *  - Better error handling
 *  - Cleaner flow using .then()
 *
 * > Problem still remaining:
 *  - Multiple .then() chains can still look messy
 ************************************************************/

console.log("\n----- 3️⃣ PROMISE -----");

//Promise is for “eventual” completion of task. A JavaScript Promise object can be:

// A   Pending : the result is undefined
let pendingPromise = new Promise((resolved, reject) =>
{
    console.log("Inprogres");
});
console.log("pendingPromise: ",pendingPromise);

// B   Resolved : the result is a value (fulfilled)
let resolvedPromise = new Promise((resolved, reject) => 
{
    resolved("200 OK Success!");
    console.log("Promise Resolved");
});
console.log("resolvedPromise: ", resolvedPromise);

// C   Rejected : the result is an error object
let rejectedPromise = new Promise((resolved, reject) => 
{
    console.log("Promise Rejected");
    reject("400 Bad Request Failed!");
});
console.log("rejectedPromise: ", rejectedPromise);

// Simple Promise Example
function getBookingStatus(bookingId) 
{
  return new Promise((resolve, reject) => 
    {
        console.log("3️⃣Promise: Fetching booking status...");

        setTimeout(() => 
        {
            const isConfirmed = Math.random() < 0.5;

            if (isConfirmed) 
            {
                resolve(`3️⃣Promise: Booking ${bookingId} CONFIRMED`);
            } else 
            {
                reject(`3️⃣Promise: Booking ${bookingId} FAILED`);
            }
        }, 0);
  });
}

// Using .then() and .catch()
getBookingStatus("INDBID123")
  .then((result) => 
    {
        console.log("3️⃣Promise: SUCCESS:", result);
    })
  .catch((error) => 
    {
        console.log("3️⃣Promise: ERROR:", error);
    });


/************************************************************
 *  4️⃣ PROMISE CHAINING
 *  Execute async tasks sequentially
 ************************************************************/

console.log("\n----- 4️⃣ PROMISE CHAINING -----");

function firstTask() 
{
    return new Promise((resolve, reject) => 
    {
        setTimeout(() => 
        {
            resolve("4️⃣Promise chaining: First Task Completed");
        }, 0);
    });
}

function secondTask() 
{
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("4️⃣Promise chaining: Second Task Completed");
    }, 0);
  });
}

// Chain promises
firstTask()
  .then((res1) => 
    {
        console.log(res1);
        return secondTask(); // return next promise
    })
  .then((res2) => 
    {
        console.log(res2);
    })
  .catch((err) => 
    {
        console.log("4️⃣Promise chaining: Error in chain:", err);
    });

/************************************************************
 *  5️⃣ ASYNC / AWAIT
 *  Cleaner way to handle Promises
 *  async → always returns a promise
 *  await → pauses execution until resolved
 * 
 * > What improved over Promise?
 *  - Looks synchronous
 *  - Easier to read
 *  - Easier to debug
 *  - Works naturally with try/catch
 ************************************************************/

console.log("\n----- 5️⃣ ASYNC / AWAIT -----");

function fetchBooking(id)
{
  return new Promise((resolve, reject) => 
    {
        setTimeout(() => 
        {
            console.log("5️⃣Async-Await: Fetched Booking ID:", id);
            resolve();
        }, 0);
    });
}

async function fetchAllBookings() 
{
  console.log("5️⃣Async-Await: Starting Booking Fetch...");

  await fetchBooking(1);
  await fetchBooking(2);
  await fetchBooking(3);

  console.log("5️⃣Async-Await: All bookings fetched successfully!");
}

// Call async function
fetchAllBookings();


/************************************************************
 *  6️⃣ IIFE (Immediately Invoked Function Expression)
 *  Function that runs immediately after definition
 ************************************************************/

(async function () 
{
  console.log("\n----- 6️⃣ ASYNC IIFE -----");

  await fetchBooking("6️⃣IIFE: A1");
  await fetchBooking("6️⃣IIFE: A2");

  console.log("6️⃣IIFE: execution completed!");
})();