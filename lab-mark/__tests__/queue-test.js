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

  test('multiple enqueues / dequeues in sequence', () => {
    let testQueue = getQueue();
    testQueue.enqueue(1);
    testQueue.enqueue(2);
    testQueue.enqueue(3);
    expect(testQueue.dequeue()).toEqual(1);
    testQueue.enqueue(4);
    testQueue.enqueue(5);
    expect(testQueue.dequeue()).toEqual(2);
    expect(testQueue.dequeue()).toEqual(3);
    testQueue.enqueue(6);
    expect(testQueue.dequeue()).toEqual(4);
    expect(testQueue.dequeue()).toEqual(5);
    expect(testQueue.dequeue()).toEqual(6);
    testQueue.enqueue(7);
    testQueue.enqueue(8);
    expect(testQueue.dequeue()).toEqual(7);
    expect(testQueue.dequeue()).toEqual(8);
    expect(testQueue.dequeue()).toEqual(undefined);
  });
});
