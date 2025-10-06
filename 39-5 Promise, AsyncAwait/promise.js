/*                      39-5 Promise, Async/Await */

/*
const getData = new Promise((resolve, reject) =>{
    resolve(566665);
})
console.log(getData);

Output: Promise { 566665 }





const getData = new Promise((resolve, reject) =>{
    resolve(566665);
})
console.log(getData + 56);

Output: [object Promise]56






const getData = new Promise((resolve, reject) =>{
    resolve(566665);
});

getData.then(data => console.log(data))

Output: 566665







const getData = new Promise((resolve, reject) =>{
    resolve(566665);
})

getData.then(data => console.log(data + 22))

Output: 566687







const getData = new Promise((resolve, reject) =>{
    // resolve(566665);
    reject('No Data Available');
})

getData.then(data => console.log(data + 22))

Output: 
node:internal/process/promises:289
            triggerUncaughtException(err, true / fromPromise /);
            ^

[UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "No Data Available".] {
  code: 'ERR_UNHANDLED_REJECTION'
}

Node.js v20.11.0






const getData = new Promise((resolve, reject) =>{
    // resolve(566665);
    reject('No Data Available');
})

getData
    .then(data => console.log(data + 22))
    .catch(err => console.error('ERR:', err))

Output: ERR: No Data Available







const getData = new Promise((resolve, reject) =>{
    const num = Math.random()*10;
    console.log(num);
    if(num < 5){
       resolve(566665); 
    }
    else{
        reject('No Data Available');
    }
    
})

getData
    .then(data => console.log(data + 22))
    .catch(err => console.error('ERR:', err))

Output:
4.153917734344672
566687







const getData = new Promise((resolve, reject) =>{
    const num = Math.random()*10;
    console.log(num);
    if(num < 5){
       resolve(566665); 
    }
    else{
        reject('No Data Available');
    }
    
})

getData
    .then(data => console.log(data + 22))
    .catch(err => console.error('ERR:', err))

Output:
8.317302532897362
ERR: No Data Available
*/








const getData = new Promise((resolve, reject) =>{
    const num = Math.random()*10;
    console.log(num);
    if(num < 5){
       resolve(566665); 
    }
    else{
        reject('No Data Available');
    }
    
})

getData
    .then(data => console.log(data + 22))
    .catch(err => console.error('ERR:', err))
/*
Output: 
2.020334542965674
566687
*/

//=========================================================================================//


/* 
Promise:
=======
The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value. A Promise is in one of these states:

1. Pending
initial state, neither fulfilled nor rejected.

2. Resolve
the operation was completed successfully.

3. Reject
the operation failed.

Example:
let promise = new Promise(function(resolve, reject){
    resolve("I'm Resolved!"); ----------------------------->executor function
});

const consumer = () => {    |--------------->consuming function
promise.then(               |
result => {},               |
error => {}                 |
}                           |


_____________________________________________________________________________________________

Create & Consume:
================

Create:

const ride new Promise((resolve, reject) => {
if (arrived) {
resolve('driver arrived ');
} else {
reject('driver bailed');
}
});


Consume:

ride
    .then(value => {                 //'then' function that handles fulfillment 
        console.log(value);          
        // driver arrived
    })
    .catch(error => {               //'catch' handle rejection
        console.log(error);
    })


_____________________________________________________________________________________________


Fetch API:
=========
01. The fetch method starts the process of fetching a resource from a server
02. The fetch method returns a Promise that resolves to a Response object.
03. A fetch() method only rejects when a network error is encountered.

_____________________________________________________________________________________________

Async/Await:
===========
* "async/await" is a special syntax to work with promises in a more comfortable way
* It's surprisingly easy to understand and use.
* The await keyword can only be used inside an async function.
* The await keyword makes the function pause the execution and
* wait for a resolved promise before it continues


Async/Await:
===========
  ------------------------------------------------->Use async keyword before 
  |                                                 function definition
  |
  |                  --------------------->await keyword that works only
  |                  |                     inside async functions
  |                  |
  |                  |
async function getUsers(url){
                     |      ------------------->Fetch keyword for
                     |      |                   network calls (i.e HTTP Client)
    Let response = await fetch(url),
    Let data = await response.json();
    console.log(data);   |
    return data;         |
}     |                  |
      |                  |
      |                  |
      |                  |
      |                  |
If promise fulfills,     | 
you will get the         |
values back else         |
rejected is thrown       |
                         |
                        When you await, a promise
                        function paused in non 
                        blocking way until it settles 



Fetch vs Async/Await:
=====================

function getFetch1(getURL){
    fetch(getURL)
        .then(resp => resp.json())
        .then(data => {
           console.log(data)
        })
        .catch(err => {
           console.log(err.message)
        })
}

_______________________________________________

async function getFetch2(getURL){
    try{
      const resp = await fetch(getURL)
      const data = await resp.json()
      console.log(data)
    }
    catch (err){
      console.log(err);
    }
}
    
*/
