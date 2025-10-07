/*                      39-6 setInterval and clearInterval with x++ and ++x */

/* 
setTimeout()
cleartimeout()
==============

setTimeout(function, milliseconds);


setTimeout(function(){
    something();
}, 1000); // Execute something() 1 second later.



let myVar = setTimeout(function, milliseconds);
//stops the execution of the function specified
//in setTimeout()
clearTimeout(myVar);
_____________________________________________________________________________________________

setInterval()
clearInterval()
===============

setInterval(function, milliseconds);


setInterval(function(){
somethingElse();
}, 2000); // Execute somethingElse() every 2 seconds.


let myVar = setInterval(function, milliseconds);

//stops the executions of the function specified
//in the setInterval() method
clearInterval(myVar);
_____________________________________________________________________________________________

setTimeout() vs setInterval()
=============================

setTimeout()
A time event function used to call another function after certain time period but executes the function only once.

setInterval()
Same as setTimeout() with a slice difference that the execution of the function occurs continuously according to the specified time interval. Here, the time interval works like a gap between the executions.
*/