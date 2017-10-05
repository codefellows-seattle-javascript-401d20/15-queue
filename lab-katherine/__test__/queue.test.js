'use strict';

const queue = require('../model/queue.js');
const getQueue = () => queue();

describe('queue', () => {
  describe('#enqueue and #dequeue', () => {
    test('the queue should have a first in first out behavior', () => {
      let queue = getQueue();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      expect(queue.dequeue()).toEqual(1);
      expect(queue.dequeue()).toEqual(2);
      expect(queue.dequeue()).toEqual(3);
      expect(queue.dequeue()).toEqual(undefined);
    });

    test('enqueueing undefined should dequeue undefined', () => {
      let queue = getQueue();
      queue.enqueue(undefined);
      queue.enqueue(undefined);
      queue.enqueue(undefined);
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      expect(queue.dequeue()).toEqual(undefined);
      expect(queue.dequeue()).toEqual(undefined);
      expect(queue.dequeue()).toEqual(undefined);
      expect(queue.dequeue()).toEqual(1);
      expect(queue.dequeue()).toEqual(2);
      expect(queue.dequeue()).toEqual(3);
    });
  });
});
