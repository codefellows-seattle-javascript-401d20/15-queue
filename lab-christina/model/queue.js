'use strict';

module.exports = () => {
  let state = [];
  return {
    enqueue: (value) => {
      state.push(value);
    },

    dequeue: (value) => {
      return state.shift(value);
    },
  }
}
