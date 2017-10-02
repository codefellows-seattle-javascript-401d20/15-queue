'use strict';

module.exports = () => {
  let state = [];
  return {
    push: (value) => {
      state.push(value);
    },
    pop: () => {
      return state.pop();
    },
    peek: (value) => {
      return state[state.length - 1];
    },
  };
};
