'use strict';

let data = [];
let length = 0;
let head;

module.exports = {
  enqueue: (val) => {
    if (!head)
      head = val;
    data.push(val);
    length++;
  },
  dequeue: () => {
    if (length <= 0) {
      head = undefined;
      return;
    }
    else {
      head = data.shift();
      length--;
      return head;
    }
  },
};