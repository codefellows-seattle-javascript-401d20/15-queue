'use strict';

const queueConstuctor = require('../model/queue.js');
const newQueue = queueConstuctor();

describe('queue', () => {
  describe('#enqueue and #dequeue should have a first in fist out behavior', () =>{
    test('the queue should have a first in first out behavior', () => {
      let queue = newQueue;
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      expect(queue.dequeue()).toEqual(1);
      expect(queue.dequeue()).toEqual(2);
      expect(queue.dequeue()).toEqual(3);
      expect(queue.dequeue()).toEqual(undefined);
    });
  });
});
