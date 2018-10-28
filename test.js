const assert = require('assert');
const sum_of_other = require('./sum_of_other');
const make = require('./make');

describe('Sum of other', () => {
  it('1', () => {
    const arr = [2, 3, 4, 1];
    const result = sum_of_other(arr);
    assert.deepEqual(result, [8, 7, 6, 9]);
  });

  it('2', () => {
    const arr = [2, 3, 4, 1, 34, 56];
    const result = sum_of_other(arr);
    assert.deepEqual(result, [98, 97, 96, 99, 66, 44]);
  });

  it('3', () => {
    const arr = [20, 34, 4, 3, 34, 56, 3456];
    const result = sum_of_other(arr);
    assert.deepEqual(result, [3587, 3573, 3603, 3604, 3573, 3551, 151]);
  });

  it('4', () => {
    const arr = [9, 8, 6, 4];
    const result = sum_of_other(arr);
    assert.deepEqual(result, [18, 19, 21, 23]);
  });

  it('5', () => {
    const arr = [1, 2];
    const result = sum_of_other(arr);
    assert.deepEqual(result, [2, 1]);
  });

  it('6', () => {
    const arr = [1000, 2000, 3000];
    const result = sum_of_other(arr);
    assert.deepEqual(result, [5000, 4000, 3000]);
  });

  it('7', () => {
    const arr = [0, 0, 0];
    const result = sum_of_other(arr);
    assert.deepEqual(result, [0, 0, 0]);
  });

  it('8', () => {
    const arr = [34, 55, 67, 0];
    const result = sum_of_other(arr);
    assert.deepEqual(result, [122, 101, 89, 156]);
  });

  it('9', () => {
    const arr = [3476, 456865445, 8468635, 564865, 49745];
    const result = sum_of_other(arr);
    assert.deepEqual(result, [465948690, 9086721, 457483531, 465387301, 465902421]);
  });
});


describe('Make', () => {
  it('1', () => {
    function sum(a, b) {
      return a + b;
    }
    const result = make(15)(34, 21, 666)(41)(sum);

    assert.deepEqual(result, 777);
  });

  it('2', () => {
    function sum(a, b) {
      return a + b;
    }
    const result = make(15)(34, 21, 666)(41)(345345)(1, 2, 100500)(sum);

    assert.deepEqual(result, 446625);
  });

  it('3', () => {
    function sum(a, b) {
      return a + b;
    }
    const result = make(12, 44)(sum);

    assert.deepEqual(result, 56);
  });

  it('4', () => {
    function mul(a, b) {
      return a * b;
    }
    const result = make(12, 44)(33)(12)(12, 32, 11, 23)(mul);

    assert.deepEqual(result, 20313317376);
  });

  it('5', () => {
    function mul(a, b) {
      return a * b;
    }
    const result = make(0, 23)(32)(mul);

    assert.deepEqual(result, 0);
  });
});
