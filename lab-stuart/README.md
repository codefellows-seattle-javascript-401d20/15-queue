##  Queue - Lab Stuart

## About
This is a Queue data structure implementation.

## Setup
`const getQueue = require('../model/queue.js');`
`let queue = getQueue();`

## Methods:
- `equeue(value)`
Has an airty of 1. Enqueues a value (integer) to the queue.
- `dequeue()`
Returns and removes from the front of the queue.
- `count()`
Returns the length of the queue.

## Testing
`npm test __test__/queue.test.js`