'use strict';

module.exports = () => {
  let state = [];
  return {
    enqueue: (value) => {
      state.unshift(value);
    },
    dequeue: () => {
      return state.pop();
    },
  };
};
