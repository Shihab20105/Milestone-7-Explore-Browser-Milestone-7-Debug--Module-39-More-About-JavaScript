/*                      39-1 What really is JavaScript */


/* 
What really is JavaScript?

** JavaScript is a highly abstracted programming language.

High Abstraction:
An abstraction is a way of
* hiding the implementation details
* showing only the functionality to the users

High Abstraction:
* User does not know what is happening inside the ATM -> 1. Hide details
* He is simply getting the money by buttons pushing -> 2. Show functionality

High Abstraction in JavaScript:
* We don't have to handle resource management and memory allocation
* We don't have to handle garbage collection
* Reduces details so that developers can focus on logic better
* Improves understandability as well as maintainability of the code

JavaScript collects garbage automatically
Garbage Collection:
* JavaScript automatically collects unused data
* free the memory with the help of an algorithm called 'Mark-and-sweep'
* The garbage collector goes through the roots, marking (remembering) them on its way.
* It then moves on to the references and marks them as well.
* The cycle continues until the garbage collector visits all the roots and references.
* The garbage collector removes all the objects, except the marked ones.
_____________________________________________________________________________________________

** JavaScript is a JIT compiled language

Just-In-Time (JIT):
* JavaScript is not a purely interpreted language.
* Modern JavaScript is JIT compiled.
* JUST-IN-TIME compiler converts the entire code into machine code and execute them immediately

                            JIT-Compiler
                    __________|     |____________
                    |                           |
             Interpretation                   Machine code
_____________________________________________________________________________________________


** JavaScript is a multi-paradigm programming language

Multi-Paradigm:
Paradigm: code structure that will determine the style or a way of programming

1. Procedural Programming
* involves writing down 'instructions'
* tells the computer what it should do 'step-by-step'.

2. Object-Oriented Programming
* modeling a system 'as a collection of objects'.
* Objects contain both 'functions (or methods) and data'.

3. Functional Programming
* an approach to software development that uses 'pure functions'
* to create 'maintainable' software.
_____________________________________________________________________________________________

** JavaScript is a proto-typed based programming language

Proto-typed based:
* In JavaScript, everything (function, array, objects) is object except the primitive data
* a prototypical object is an object used as a template from which to get the initial properties for a new object
* Proto-type is a blue print


                    .prototype                                 methods
    array----------------------------------------------------> .push
      |                                                        .pop
      |                                                        .indexOf
      |                                                           |
      |                                                           |
      |                                                           |inherits
      |                                                           |
      |____________let names = [Tom, Luke, Ben];__________________|
                   name.pop();

_____________________________________________________________________________________________

** JavaScript is dynamically typed

Dynamically-typed:
* When you declare a variable, you do not need to specify what type this variable is.
* JavaScript engine infers what type this variable is based on the value assigned to at run time.

let temp = 'name';
temp = true;

* As JavaScript determines the type at runtime we can re-declare the type
_____________________________________________________________________________________________

Summary:

                                Garbage Collection
                                        |
                                        |
    High Abstraction--------------------|                      
                                        |------------------------JIT Compiled
                                        |
                                    (JavaScript)
        Dynamically -typed--------------|
                                        |
                                        |----------------Multi-paradigm
                                        |
                                        |
                            Prototyped-based





*/