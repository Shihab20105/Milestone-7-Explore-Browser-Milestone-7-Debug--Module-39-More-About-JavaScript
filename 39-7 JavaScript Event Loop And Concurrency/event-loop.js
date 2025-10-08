/*                      39-7 JavaScript event loop and concurrency */

/*
function a(){
    console.log('a');
}
function b(){
    console.log('b');
}

a();
b();

Output:
a
b



function a(){
    console.log('a');
    b();
}
function b(){
    console.log('b');
}

a();

Output:
a
b





function a(){
    console.log('a');
    b();
    console.log('aa');
}
function b(){
    console.log('b');
    console.log('bb');
}

a();

Output:
a
b
bb
aa






function a(){
    console.log('a');
    b();
    console.log('aa');
}
function b(){
    console.log('b');
    d();
    console.log('bb');
}
function d(){
    console.log('d');
    console.log('dd');
}

a();

Output:
a
b
d
dd
bb
aa
*/





function a(){
    console.log('a');
    b();
    console.log('aa');
}
function b(){
    console.log('b');
    d();
    console.log('bb');
}
function d(){
    console.log('d');
    console.log('dd');
}
function x(){
    console.log('x');
    y();
    console.log('xx');
}
function y(){
    console.log('y');
    z();
    console.log('yy');
}
function z(){
    console.log('z');
    console.log('zz');
}
setTimeout(() =>{
    console.log('inside timeout');
}, 2000)
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
a();
x();

/* 
Debug Console Output:
a                                                                         event-loop.js:92 
b                                                                         event-loop.js:97 
d                                                                         event-loop.js:102 dd                                                                        event-loop.js:103 
bb                                                                        event-loop.js:99 
aa                                                                        event-loop.js:94 
x                                                                         event-loop.js:106 
y                                                                         event-loop.js:111 
z                                                                         event-loop.js:116 
zz                                                                        event-loop.js:117 
yy                                                                        event-loop.js:113 
xx                                                                        event-loop.js:108 
{userId: 1, id: 1, title: 'delectus aut autem', completed: false}         event-loop.js:124
inside timeout                                                            event-loop.js:120 

*/