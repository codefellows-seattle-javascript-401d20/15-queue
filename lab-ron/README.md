# Queue

The queue library allows the user to create a queue of n length. Upon dequeuing, the user can return the first item on the queue

### .enqueue(<val>) 
The `enqueue()` method takes in a variable and adds it to a queue.

data.enqueue(3);
data.enqueue(5);
data.enqueue('hello world');

/// data = [3, 5, 'hello world']

### .dequeue()
When invoked `dequeue()` method removes an item from the queue 

data.enqueue(3);
data.enqueue(5);
data.enqueue('hello world');
data.dequeue() // return 3
data.dequeue() // return 5
data.dequeue() // return 'hello world'
data.dequeue() // return undefined

