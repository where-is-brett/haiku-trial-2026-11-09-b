// tests/categories.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { categoryOf } from '../src/lib/categories.js';

test('one shop from each category resolves to its key', () => {
  assert.equal(categoryOf('Greenbarrow Fresh'), 'groceries');
  assert.equal(categoryOf('Kestrel Coffee Bar'), 'eating_out');
  assert.equal(categoryOf('Waverly Fuel Stop'), 'transport');
  assert.equal(categoryOf('Brightfield Power'), 'bills');
  assert.equal(categoryOf('Marlowe Homewares'), 'shopping');
  assert.equal(categoryOf('Larkspur Pharmacy'), 'health');
  assert.equal(categoryOf('Brightwave Payroll'), 'income');
});

test('shop names match ignoring case', () => {
  assert.equal(categoryOf('GREENBARROW FRESH'), 'groceries');
  assert.equal(categoryOf('ember grill'), 'eating_out');
});

test('a description with no shop is other', () => {
  assert.equal(categoryOf('Unknown Shop 123'), 'other');
});

test('Pasta, Pizza & Co matches with its comma and ampersand intact', () => {
  assert.equal(categoryOf('Pasta, Pizza & Co'), 'eating_out');
});
