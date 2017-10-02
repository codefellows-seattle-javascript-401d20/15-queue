'use strict';

module.exports = () => {
let queueArray = [];
return {
    enqueue: (value) => {
      queueArray.push(value);
  },
    dequeue: (value) => {
      queueArray.shift(value);
      }
    }
  }
