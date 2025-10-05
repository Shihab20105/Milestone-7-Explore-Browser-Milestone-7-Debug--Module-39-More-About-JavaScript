/*                      39-3 JavaScript Execution Context and Call stack */

let a = 5;
function add(num1, num2){
    const result = num1 + num2 + a;
    return result;
}

const sum = add(4, 5);
console.log(sum);
/* 
                                Execution Context and Call stack
                                ================================

Execution Context:
* An execution context is an environment
* Inside the execution context a piece of JavaScript code gets executed.
* Variables, parameters and other information related to the piece of code get
stored in the execution context

Execution Context:
* There are two kinds of Execution Context in JavaScript:
* Global Execution Context (GEC)
* Function Execution Context (FEC)

Global Execution Context:
Whenever the JavaScript engine receives a script file, it first creates a default Execution Context known as the Global Execution Context (GEC).
* GEC is the base/default Execution Context
* all JavaScript code that is not inside of a function gets executed.
* For every JavaScript file, there can only be one GEC

Function Execution Context:
Whenever a function is called, the JavaScript engine creates a different type of Execution Context known as a Function Execution Context (FEC)
* Every time a function is called, a new execution context is created for that function.
* Each function has its own execution context.
* Since every function call gets its own FEC, there can be more than one FEC in the run-time of a script.

Phases:
The execution context is created in two phases:
* Creation Phase
* Execution Phase

Creation Phase:
Creation phase is the phase in which the JS engine has called a function but its execution has not started.
* JS engine is in the compilation phase
* it just scans over the function code to compile the code
* it doesn't execute any code.

Global Execution Context:
Creation Phase (Web Browser)
----------------------------

Global Object: window
this: window
x: undefined
timesTen: function(){...}
y: undefined


Execution Phase:
During the execution phase, the JavaScript engine executes the code line by line
* assigns the values to variables, and
* executes the function calls.

Global Execution Context:
Execution Phase (Web Browser)
-----------------------------

Global Object: window
this: window
x: 10
timesTen: function(){...}
y: timesTen(x)

Call Stack:
* The call stack is used by JavaScript to keep track of multiple function calls
* In order to manage the execution contexts, the JavaScript engine uses a call stack.
*/