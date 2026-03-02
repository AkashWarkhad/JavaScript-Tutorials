/**********************************************************************
 *  JAVASCRIPT FETCH API - COMPLETE GUIDE
 *
 *  Covers:
 *   1️⃣ GET Request (Async/Await)
 *   2️⃣ GET Request (Promise Version)
 *   3️⃣ POST / PUT Request
 *   4️⃣ Error Handling
 *   5️⃣ HTTP Status Handling
 **********************************************************************/

console.log("========== 13 FETCH API DEMO ==========\n");

/**********************************************************************
 *  DOM Elements
 **********************************************************************/
const catBtn = document.querySelector("#catBtn");
const catFact = document.querySelector("#catFact");

/**********************************************************************
 *  1️⃣ GET REQUEST USING ASYNC / AWAIT
 *
 *  Why Async/Await?
 *  - Cleaner than .then()
 *  - Looks synchronous
 *  - Easy error handling with try/catch
 **********************************************************************/

const CAT_FACT_URL = "https://catfact.ninja/fact";

async function getCatFactAsync() 
{
  try {
        console.log("Fetching Cat Facts Data By Asyn-Await ...");

        const response = await fetch(CAT_FACT_URL);

        // Always check HTTP status manually
        if (!response.ok) 
        {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        console.log("Fetched Data respomse :", response);
        const data = await response.json();

        // Update UI
        catBtn.innerText = "Get Cat Fact By (Async/Await)";
        catFact.innerText = data.fact;

        console.log("Success By Asyn-Await:", data);
    } catch (error) 
    {
        console.error("Error occurred:", error.message);
        catFact.innerText = "Failed to fetch cat fact.";
    }
}

// Attach event
catBtn.addEventListener("click", getCatFactAsync);


/**********************************************************************
 *  2️⃣ SAME GET REQUEST USING PROMISE
 *
 *  Why This Is Less Preferred?
 *  - Harder to read when chaining many calls
 *  - Error handling separated
 **********************************************************************/

/*
function getCatFactPromise() 
{
  console.log("Fetching Cat Facts Data by Promise...");
  fetch(CAT_FACT_URL)
    .then((response) => 
    {
        if (!response.ok) 
        {
            throw new Error("HTTP Error!");
        }
        return response.json();
    })
    .then((data) => 
    {
        catBtn.innerText = "Get Cat Fact By (Promise)";
        catFact.innerText = data.fact;
    })
    .catch((error) => 
    {
        console.error("Error:", error);
    });
}

// Attach event
catBtn.addEventListener("click", getCatFactPromise);

*/

/**********************************************************************
 *  3️⃣ PUT REQUEST EXAMPLE
 *
 *  Used to update existing resource.
 *  Demonstrates:
 *   - Method
 *   - Headers
 *   - Body
 *   - JSON conversion
 **********************************************************************/

const POST_URL = "https://jsonplaceholder.typicode.com/posts/1";

async function CreatePost() 
{
    try 
    {
        let request = JSON.stringify(
        {
            id: 1,
            title: "Akash",
            body: "Software Engineer",
            userId: 99
        });

        console.log("Sending PUT Request...", request);

        const response = await fetch(POST_URL, 
        {
            method: "PUT", // Could be POST / PATCH
            headers: 
            {
                "Content-Type": "application/json"
            },
            body: request
        });

        if (!response.ok) 
        {
            throw new Error(`Update Failed. Status: ${response.status}`);
        }

        const updatedData = await response.json();

        console.log("PUT SuccessFull, Updated Response:", updatedData);

    } catch (error) 
    {
        console.error("PUT Error:", error.message);
    }
}

// Call once for demo
CreatePost();



/**********************************************************************
 *  IMPORTANT CONCEPTS
 **********************************************************************/
/*
Terms : 
   ### AJAX : Asyncronous Javascript And Xml.
   ### AJAS : Asyncronous Javascript And Json.
   ### JSON : JavaScript Object Notation.
   ### Promise.json() : To covert the object into Json data.

📌 FETCH RETURNS A PROMISE

- fetch() → returns Promise<Response>
- response.json() → returns Promise<Object>

📌 RESPONSE OBJECT CONTAINS:
- response.status
- response.ok
- response.headers
- response.json()

📌 HTTP METHODS:
- GET    → Read data
- POST   → Create new data
- PUT    → Replace full resource
- PATCH  → Partial update
- DELETE → Remove resource

📌 COMMON STATUS CODES:
- 200 OK
- 201 Created
- 400 Bad Request
- 401 Unauthorized
- 403 Forbidden
- 404 Not Found
- 500 Server Error
- 503 : Server down
- 504 : Server too slow

📌 IMPORTANT:
fetch() does NOT throw error for 404/500.
You must manually check response.ok.
*/