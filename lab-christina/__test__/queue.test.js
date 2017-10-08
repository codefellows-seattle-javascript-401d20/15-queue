'use strict';

const queueConstructor = require('../model/queue.js');
const newQueue = () => queueConstructor();

describe('queue', () => {
  describe('#enqueue and #dequeue should have a first in fist out behavior', () =>{
    test('the queue should have a first in first out behavior', () => {
      let queue = newQueue();

      queue.enqueue('P');
      queue.enqueue('o');
      queue.enqueue('w');
      queue.enqueue('e');
      queue.enqueue('r');
      queue.enqueue('H');
      queue.enqueue('o');
      queue.enqueue('u');
      queue.enqueue('r');
      expect(queue.dequeue()).toEqual('P');
      expect(queue.dequeue()).toEqual('o');
      expect(queue.dequeue()).toEqual('w');
      expect(queue.dequeue()).toEqual('e');
      expect(queue.dequeue()).toEqual('r');
      expect(queue.dequeue()).toEqual('H');
      expect(queue.dequeue()).toEqual('o');
      expect(queue.dequeue()).toEqual('u');
      expect(queue.dequeue()).toEqual('r');
      expect(queue.dequeue()).toEqual(undefined);

    });
  });
});
