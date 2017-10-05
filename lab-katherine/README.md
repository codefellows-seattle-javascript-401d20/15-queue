![cf](https://i.imgur.com/7v5ASc8.png) Lab 15: Queue

## Exported Module Values  
Created a `Queue` in queue.js, holding an `enqueue` method and a `dequeue` method
* `enqueue` method: arity of one, parameter's data type can be a string, number, boolean, any element an array can holding. Adds a value to the queue
* `dequeue` method: arity of zero. Removes a value from the queue, specifically the first value added out of the existing values

## Tests
* '#enqueue and #dequeue' test simply tests that when a number, boolean, or string is enqueued to a queue, it will be removed in the correct order, first in first out. When there are no values left to dequeue, the value dequeued is undefined.
* 'enqueueing undefined should dequeue undefined' test tests that, when an undefined value is enqueued to a queue along with numbers, booleans, and strings, it is stored and dequeued just like the number, boolean, and string values. Again, if all added values are dequeued, using the dequeue method on the queue again, the value dequeued is undefined.

## How To Run Tests
* run `npm test`
