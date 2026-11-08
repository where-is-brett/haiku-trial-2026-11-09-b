// tests/categories.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { CATEGORIES, SHOP_RULES, categoryOf } from '../src/lib/categories.js';

test('the category keys and labels are exported in order', () => {
  assert.deepEqual(CATEGORIES, [
    { key: 'groceries', label: 'Groceries' },
    { key: 'eating_out', label: 'Eating out' },
    { key: 'transport', label: 'Transport' },
    { key: 'bills', label: 'Bills' },
    { key: 'shopping', label: 'Shopping' },
    { key: 'health', label: 'Health' },
    { key: 'income', label: 'Income' },
    { key: 'other', label: 'Other' },
  ]);
});

test('the shop rules are exported as data, one entry per shop', () => {
  assert.equal(SHOP_RULES.length, 27);
  assert.deepEqual(SHOP_RULES[0], { shop: 'Greenbarrow Fresh', category: 'groceries' });
  assert.deepEqual(SHOP_RULES[26], { shop: 'Oakridge Dividends', category: 'income' });
});

test('one shop from each category resolves to its key', () => {
  assert.equal(categoryOf('Greenbarrow Fresh'), 'groceries');
  assert.equal(categoryOf('Kestrel Coffee Bar'), 'eating_out');
  assert.equal(categoryOf('Waverly Fuel Stop'), 'transport');
  assert.equal(categoryOf('Brightfield Power'), 'bills');
  assert.equal(categoryOf('Marlowe Homewares'), 'shopping');
  assert.equal(categoryOf('Larkspur Pharmacy'), 'health');
  assert.equal(categoryOf('Brightwave Payroll'), 'income');
});

test('every shop in the list resolves to its category', () => {
  const cases = [
    ['Greenbarrow Fresh', 'groceries'],
    ['Pennywhistle Market', 'groceries'],
    ['Lowtide Grocers', 'groceries'],
    ['Harvest Lane Foods', 'groceries'],
    ['Pasta, Pizza & Co', 'eating_out'],
    ['Kestrel Coffee Bar', 'eating_out'],
    ['Saltbush Noodle House', 'eating_out'],
    ['Ember Grill', 'eating_out'],
    ['Waverly Fuel Stop', 'transport'],
    ['Tramline Fares', 'transport'],
    ['Lantern Rideshare', 'transport'],
    ['Northgate Parking', 'transport'],
    ['Brightfield Power', 'bills'],
    ['Clearwater Utilities', 'bills'],
    ['Skyline Broadband', 'bills'],
    ['Hollis Insurance', 'bills'],
    ['Marlowe Homewares', 'shopping'],
    ['Quillon Books', 'shopping'],
    ['Fernhill Outfitters', 'shopping'],
    ['Pixel Parade Tech', 'shopping'],
    ['Larkspur Pharmacy', 'health'],
    ['Elmgrove Physio', 'health'],
    ['Cobalt Dental', 'health'],
    ['Sunnyvale Optical', 'health'],
    ['Brightwave Payroll', 'income'],
    ['Tidepool Interest', 'income'],
    ['Oakridge Dividends', 'income'],
  ];
  for (const [shop, key] of cases) {
    assert.equal(categoryOf(shop), key, shop);
  }
});

test('shop names match ignoring case', () => {
  assert.equal(categoryOf('GREENBARROW FRESH'), 'groceries');
  assert.equal(categoryOf('ember grill'), 'eating_out');
});

test('a shop name inside a longer description still matches', () => {
  assert.equal(categoryOf('EMBER GRILL 0412 SYDNEY'), 'eating_out');
  assert.equal(categoryOf('POS Tramline Fares card 4417'), 'transport');
});

test('a description with no shop is other', () => {
  assert.equal(categoryOf('Unknown Shop 123'), 'other');
});

test('Pasta, Pizza & Co matches with its comma and ampersand intact', () => {
  assert.equal(categoryOf('Pasta, Pizza & Co'), 'eating_out');
});
