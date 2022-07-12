const { stringLength, reverseString, myCalculator, capitalize } = require('./function');

test('hello count is 5', () => {
  let str = 'Hello';
  let ans = stringLength(str);
  expect(ans).toBe(5);
});

test('empty string returns not met', () => {
  let str = '';
  let ans = () => {stringLength(str)}
  expect(ans).toThrow('not met');
});

test('hellohellow returns not met', () => {
  let str = 'hellohellow';
  let ans = () => {stringLength(str)};
  expect(ans).toThrow(Error);
});

test('heya reversed ayeh', () => {
  const str = 'heya';
  const anss = reverseString(str);
  expect(anss).toBe('ayeh');
});

describe('My Calculator multiply', () => {
  test('multiply with positive numbers', () => {
    let a = 3;
    let b = 5;
    let ans = myCalculator.multiply(a, b);
    expect(ans).toBe(15);
  });
  test('multiply with negative number', () => {
    let a = -3;
    let b = 5;
    let ans = myCalculator.multiply(a, b);
    expect(ans).toBe(-15);
  });
  test('multiply with 0', () => {
    let a = 0;
    let b = 5;
    let ans = myCalculator.multiply(a, b);
    expect(ans).toBe(0);
  });
});

describe('My Calculator add', () => {
  test('add with positive numbers', () => {
    let a = 3;
    let b = 5;
    let ans = myCalculator.add(a, b);
    expect(ans).toBe(8);
  });
  test('add with negative numbers', () => {
    let a = -3;
    let b = -5;
    let ans = myCalculator.add(a, b);
    expect(ans).toBe(-8);
  });
  test('add with negative and positive numbers', () => {
    let a = -3;
    let b = 5;
    let ans = myCalculator.add(a, b);
    expect(ans).toBe(2);
  });
});

describe('My Calculator substract', () => {
  test('substract with positive numbers', () => {
    let a = 3;
    let b = 5;
    let ans = myCalculator.substract(a, b);
    expect(ans).toBe(-2);
  });
  test('substract with negative numbers', () => {
    let a = -3;
    let b = -5;
    let ans = myCalculator.substract(a, b);
    expect(ans).toBe(2);
  });
  test('substract with negative and positive numbers', () => {
    let a = -3;
    let b = 5;
    let ans = myCalculator.substract(a, b);
    expect(ans).toBe(-8);
  });
});

describe('My Calculator divide', () => {
  test('divide with positive numbers', () => {
    let a = 3;
    let b = 5;
    let ans = myCalculator.divide(a, b);
    expect(ans).toBe(3/5);
  });
  test('divide with negative numbers', () => {
    let a = -3;
    let b = -5;
    let ans = myCalculator.divide(a, b);
    expect(ans).toBe(3/5);
  });
  test('divide to 0', () => {
    let a = -3;
    let b = 0;
    let ans = myCalculator.divide(a, b);
    expect(ans).toBe(-Infinity);
  });
});

describe('Capitalize first letter', () => {
  test('hello should return Hello', () => {
    let str = 'hello'
    let ans = capitalize(str);
    expect(ans).toBe('Hello');
  });
});