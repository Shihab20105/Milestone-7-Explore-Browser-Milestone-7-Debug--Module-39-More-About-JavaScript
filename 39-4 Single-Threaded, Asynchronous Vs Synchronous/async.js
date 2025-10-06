/*                      39-4 Single-threaded, Asynchronous vs Synchronous */

/*
console.log(1);
console.log(2);
doSomething();
console.log(4);
console.log(5);
console.log(6);

function doSomething(){
    console.log(3);
}

Output:
1
2
3
4
5
6
*/






/*
console.log(1);
console.log(2);
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
console.log(4);
console.log(5);
console.log(6);

function doSomething(){
    console.log(3);
}

Debug Console Output:
1                                                                               async.js:30 
2                                                                               async.js:31
4                                                                               async.js:35
5                                                                               async.js:36
6                                                                               async.js:37 
 {userId: 1, id: 1, title: 'delectus aut autem', completed: false}              async.js:34 
*/







/*
console.log(1);
console.log(2);
setTimeout(doSomething);
console.log(4);
console.log(5);
console.log(6);

function doSomething(){
    console.log(3);
}

Debug Console Output:

1                                                                               async.js:59 
2                                                                               async.js:60 
4                                                                               async.js:62 
5                                                                               async.js:63 
6                                                                               async.js:64 
3                                                                               async.js:67 
*/







/*
console.log(1);
console.log(2);
setTimeout(doSomething, 4000);
console.log(4);
console.log(5);
console.log(6);

function doSomething(){
    console.log(3);
}

Debug Console Output:
1                                                                               async.js:87 
2                                                                               async.js:88 
4                                                                               async.js:90 
5                                                                               async.js:91 
6                                                                               async.js:92 
3                                                                               async.js:95 
*/








console.log(1);
console.log(2);
setTimeout(() => {
    console.log('Lazy logged');
}, 4000);
console.log(4);
console.log(5);
console.log(6);

function doSomething(){
    console.log(3);
}

/*
Debug Console Output:
1                                                                               async.js:114 
2                                                                               async.js:115 
4                                                                               async.js:119 
5                                                                               async.js:120 
6                                                                               async.js:121 
Lazy logged                                                                     async.js:117 
*/

//=========================================================================================//

/* 
                                JavaScript
                                ==========

                            Single-threaded 
                        Asynchronous vs Synchronous


Single-threaded:
* Single-threaded means only one statement is executed at a time.
* JavaScript only has one call stack.
* JavaScript runs code line by line
* Must finish executing a piece of code before moving onto the next

function one() {
    console.log('A');
    two();
    console.log('C');
}

function two() {
    console.log('B');
}

one();
console.log('Done');

Output:
A
B
C
Done


What do you mean by Synchronous?
* You'll see that until the first image is loaded completely
* the second image doesn't start loading.


What do you mean by Asynchronous?
* All the images are loading at their own pace.
* None of them is waiting for any of the others.

Synchronous vs Asynchronous:
                                                          Console
console.log(" I ");         |       Synchronous          |"I"
console.log(" eat ");       |--------------------------->|"eat"
console.log(" Ice Cream "); |                            |"Ice Cream"



                                                          Console
console.log("I");                     |                  |
// This will be shown after 2 seconds |                  |
setTimeout(()=>{                      |   Asynchronous   |
    console.log("eat");               |----------------->|"I"
}, 2000)                              |                  |"Ice Cream"
console.log("Ice Cream")              |                  |"eat"



How asynchronous JavaScript works?

* The (anonymous) function executes the script.
* main calls first() and first() calls setTimeout().
* setTimeout() pops off the call stack before main() can call second().

*/
