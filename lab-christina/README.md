## Queue

### queue.js module

* The queue.js module exports a function that contains two methods.
* The function creates a queue with first in first out behavior.

##### __Enqueue__

* The enqueue method has an arity of one.
* The enqueue method takes in a value and pushes that value into an array.
* The array holds the state of the queue.

##### __dequeue__

* The dequeue method has an arity on one.
* The dequeue method shifts the first value inserted by queue out of the array creating the first in first out behavior of a queue.

##### __TEST__

* The first test simply tests the basic functionality of the queue. It does this by first enqueue'ing multiple characters before dequeue'ing. The expected outcome is that the first value that was passed in, in this case 'P' will be the first to shift out of the state of the queue.
* The second test aims to prove that null when inputed will return null as well as show that when the queue is emptied dequeue will return undefined.
