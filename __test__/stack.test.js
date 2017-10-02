'use strict';

const stack = require('../model/stack.js');
const getStack = () => stack();

describe('stack', () => {
  describe('#push and #pop', () => {
    test('the stack should have a first in last out behavior', () => {
      let stack = getStack();
      stack.push(1);
      stack.push(2);
      stack.push(3);
      expect(stack.pop()).toEqual(3);
      expect(stack.pop()).toEqual(2);
      expect(stack.pop()).toEqual(1);
      expect(stack.pop()).toEqual(undefined);
    });
  });
});
