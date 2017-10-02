'use strict';

let data = [];
let length = 0;
let head;

let log = () => {
  console.log(`
  HEAD: ${head}
  LENGTH: ${length}
  DATA: ${data}`);
};

module.exports = {
  enqueue: (val) => {
    if (!head)
      head = val;
    data.push(val);
    length++;
    log();
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
  peek: () => head,

};