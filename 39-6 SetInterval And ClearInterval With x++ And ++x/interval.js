/*                      39-6 setInterval and clearInterval with x++ and ++x */

/*
// i++ VS ++i
// x++ VS ++x

console.log(1)
console.log(2)
setTimeout(() => {
    console.log(3);
}, 1000)
console.log(4)
console.log(5)
console.log(6)

Output:
1
2
4
5
6
3






console.log(1)
console.log(2)
setInterval(() => {
    console.log(3);
}, 1000)
console.log(4)
console.log(5)
console.log(6)

Output:
1
2
4
5         // It will go on and on 
6         // To stop forcefully press ctrl + c
3
3
3
3
3








console.log(1)
console.log(2)
let num = 0;
setInterval(() => {
    console.log(num);
}, 1000)
console.log(4)
console.log(5)
console.log(6)

Output: 
1
2
4
5
6            // It will go on and on 
0            // To stop forcefully press ctrl + c
0
0
0
0









console.log(1)
console.log(2)
let num = 0;
setInterval(() => {
    console.log(num++);
}, 1000)
console.log(4)
console.log(5)
console.log(6)

Output:
1
2
4
5
6
0               // It will add 1 every time and it will go on and on
1               // To stop forcefully press ctrl + c     
2
3
4
5
6
7
8
9
10











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
let num = 0;
const intervalId = setInterval(() => {
    console.log(num++);
}, 1000)


Debug Console Output:
  1                                                                         interval.js:122 
  2                                                                         interval.js:123 
  4                                                                         interval.js:127 
  5                                                                         interval.js:128 
  6                                                                         interval.js:129 
  0                                                                         interval.js:136 
  1                                                                         interval.js:136 
  2                                                                         interval.js:136 
  interval.js:125 Lazy logged                                               interval.js:125
  3                                                                         interval.js:136 
  4                                                                         interval.js:136 
  5                                                                         interval.js:136 
  6                                                                         interval.js:136 
  7                                                                         interval.js:136 
  8                                                                         interval.js:136 
  9                                                                         interval.js:136 
  10                                                                        interval.js:136
> clearInterval(intervalId)     // To stop it forcefully you do this
< undefined                     











console.log(1);
console.log(2);
const timeoutId = setTimeout(() => {
    console.log('Lazy logged');
}, 4000);
console.log(4);
console.log(5);
console.log(6);

function doSomething(){
    console.log(3);
}
let num = 0;
const intervalId = setInterval(() => {
    console.log(num++);
}, 1000)


Debug console Output:
   1                                                                        interval.js:171  
   2                                                                        interval.js:172 
   4                                                                        interval.js:176 
   5                                                                        interval.js:177 
   6                                                                        interval.js:178 
   0                                                                        interval.js:185 
   1                                                                        interval.js:185 
   2                                                                        interval.js:185 
   Lazy logged                                                              interval.js:174
   3                                                                        interval.js:185 
   4                                                                        interval.js:185 
 > clearTimeout(timeoutId)
 < undefined
   5                                                                        interval.js:185 
   6                                                                        interval.js:185 
   7                                                                        interval.js:185 
   8                                                                        interval.js:185 
   9                                                                        interval.js:185 
   10                                                                       interval.js:185 
 > clearInterval(intervalId)
 < undefined







console.log(1);
console.log(2);
let num = 0;
const intervalId = setInterval(() => {
    console.log(num++);
    if(num === 10){
        clearInterval(intervalId);
    }
}, 1000)
console.log(4)
console.log(5)
console.log(6)

Output:
1
2
4
5
6
0 ------------------------->// Started from 0
1
2
3
4
5
6
7
8
9








console.log(1);
console.log(2);
let num = 0;
const intervalId = setInterval(() => {
    num++;
    console.log(num);
    if(num === 10){
        clearInterval(intervalId);
    }
}, 1000)
console.log(4)
console.log(5)
console.log(6)

Output:
1
2
4
5
6
1 -------------------------->// Started from 1
2
3
4
5
6
7
8
9
10
*/







console.log(1);
console.log(2);
let num = 0;
const intervalId = setInterval(() => {
    console.log(++num);
    if(num === 10){
        clearInterval(intervalId);
    }
}, 1000)
console.log(4)
console.log(5)
console.log(6)
/*
Output:
1
2
4
5
6
1 ------------------------>// Started from 1
2
3
4
5
6
7
8
9
10
*/
