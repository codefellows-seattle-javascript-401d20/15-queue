'use strict';

module.exports = () => {
  let state = [];
  let head = 0;
  let tail = 0;
  return {
    enqueue: (value) => {
      state.push(value);
      tail++;
    },
    dequeue: () => {
      if (tail - head === 0) return;
      head++;
      return state.shift();
    },
    count: () => {
      return tail - head;
    }
  }
}
