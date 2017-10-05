'use strict';

module.exports = () => {
  let queueArray = [];
  return {
    enqueue: (value) => {//undefined
      queueArray.push(value);
    },
    dequeue: (value) => {
      queueArray.shift(value);
    },
  };
};
