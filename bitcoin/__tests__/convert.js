'use strict';

const convert = require('..');
const Big = require('big.js');

test('should default to returning a Number', () => {
  expect(convert(2, 'BTC', 'BTC')).isNumber;
});

test('should return a Number', () => {
  expect(convert(2, 'BTC', 'BTC', 'Number')).isNumber;
});

test('should return a Big number', () => {
  expect(convert(2, 'BTC', 'BTC', 'Number')).isBig;
});

test('should return a String', () => {
  expect(convert(2100, 'mBTC', 'BTC', 'String')).isString;
});

test('should convert an integer', () => {
  expect(convert(123456789012345, 'Satoshi', 'BTC', 'Number')).isInteger;
});

test('should convert a number', () => {
  expect(convert(1234567.89012345, 'BTC', 'Satoshi', 'Number')).isString;
});

test('should convert a string', () => {
  expect(convert('2', 'BTC', 'BTC', 'Number')).isString;
});

test('should convert a Big number', () => {
  expect(convert(new Big(2), 'BTC', 'BTC', 'Number')).isBig;
});

test('should convert a NaN to a Number', () => {
  expect(convert(NaN, 'BTC', 'BTC', 'Number')).isNumber;
  expect(convert(NaN, 'BTC', 'mBTC', 'Number')).isNumber;
});

test('should convert a NaN to a String', () => {
  expect(convert(NaN, 'BTC', 'BTC', 'String')).isString;
  expect(convert(NaN, 'BTC', 'mBTC', 'String')).isString;
});

test('should not convert a NaN to a Big', () => {
  expect(() => {
    convert(NaN, 'BTC', 'BTC', 'Big');
  }).toThrow();
});

test('should handle rounding errors', () => {
  expect(convert(4.6, 'Satoshi', 'BTC', 'Number')).toBe(4.6e-8);
  expect(convert(0.000000046, 'BTC', 'Satoshi', 'Number')).toBe(4.6);
});

test('should throw when untest is undefined', () => {
  expect(() => {
    convert(new Big(2), 'x', 'BTC', 'Number');
    convert(new Big(2), 'BTC', 'x', 'Number');
    convert(NaN, 'x', 'BTC', 'Number');
    convert(NaN, 'BTC', 'x', 'Number');
  }).toThrow();
});

test('should throw when representaion is undefined', () => {
   expect(() => {
    convert(2, 'BTC', 'mBTC', 'x');
    convert(NaN, 'BTC', 'mBTC', 'x');
  }).toThrow();
});

test('should allow untest aliases', () => {
  expect(() => {
    convert(4.6, 'Satoshi', 'sat');
    convert(4.6, 'μBTC', 'btest');
  }).toThrow();
});

test('should throw when the unit already exist with another factor', () => {
  expect(() => {
    convert.addUnit('BTC',10);
  }).toThrow();
});

test('should throw when unit is predifined', () => {
  expect(() => {
    convert.removeUnit('sat');
  }).toThrow();
});