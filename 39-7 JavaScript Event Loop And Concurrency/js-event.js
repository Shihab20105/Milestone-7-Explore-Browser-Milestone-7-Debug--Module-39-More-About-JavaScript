/*                      39-7 JavaScript event loop and concurrency */

/* 
Call Stack
==========
* Keeps track of all the operations in line to be executed.
* Whenever a function is finished, it is popped from the stack.

Event Queue
===========
* Sends new functions to the stack for processing.
* Follows the queue data structure.
* Maintains the correct sequence in which all operations should be sent for execution.
*/