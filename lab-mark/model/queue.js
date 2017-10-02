'use strict';

const sll = (value) => ({next: null, value});

module.exports = () => {
  let last = null;
  let first = null;
  return {
    enqueue: (value) => {
      if(!first) {
        first = sll(value);
        last = sll(value);
      } else {
        let lastIn = sll(value);
        if(!first.next)
          first.next = lastIn;          
        last.next = lastIn;
        last = lastIn;
      }

    },
    dequeue: () => {
      if(!first)
        return;
      let result = first.value;
      first = first.next;
      return result;
    },
  };
};
