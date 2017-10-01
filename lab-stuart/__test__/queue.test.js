'use strict';

const getQueue = require('../model/queue.js');

describe('queue', () => {
  describe('#enqueue, #dequeue, #count methods', () => {
    test('the queue should have a first in first out behavior', () => {
      let queue = getQueue();
      queue.enqueue(5);
      queue.enqueue(10);
      queue.enqueue(15);
      expect(queue.count()).toEqual(3);
      expect(queue.dequeue()).toEqual(5);
      expect(queue.dequeue()).toEqual(10);
      expect(queue.count()).toEqual(1);
      expect(queue.dequeue()).toEqual(15);
      expect(queue.count()).toEqual(0);
      expect(queue.dequeue()).toEqual(undefined);
      queue.enqueue(20);
      queue.enqueue(40);
      expect(queue.dequeue()).toEqual(20);
      expect(queue.count()).toEqual(1);
      expect(queue.dequeue()).toEqual(40);
      expect(queue.count()).toEqual(0);
      expect(queue.dequeue()).toEqual(undefined);
    });
  });
});
