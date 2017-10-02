'use strict';

let queue = require('../lib/queue.js');

describe('queue for the win', () => {
  test('testing enqueue and dequeue', () => {
    let data = queue;
    data.enqueue(3);
    data.enqueue(5);
    data.enqueue('hello world');
    expect(data.dequeue()).toEqual(3);
    expect(data.dequeue()).toEqual(5);
    expect(data.dequeue()).toEqual('hello world');
    expect(data.dequeue()).toBe(undefined);
  });
});
