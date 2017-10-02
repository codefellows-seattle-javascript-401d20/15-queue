'use strict';

const Queue = require('../model/queue.js');

const getQueue = () => Queue();

describe('Queue', () => {
  test('Enqueue should append queued value and dequeue should remove the first value in.', () => {
    let testQueue = getQueue();
    testQueue.enqueue(1);
    testQueue.enqueue(2);
    testQueue.enqueue(3);
    expect(testQueue.dequeue()).toEqual(1);
    expect(testQueue.dequeue()).toEqual(2);
    expect(testQueue.dequeue()).toEqual(3);
    expect(testQueue.dequeue()).toEqual(undefined);
  });
});
