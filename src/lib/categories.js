// src/lib/categories.js

// The category keys and labels, in the order they are shown.
export const CATEGORIES = [
  { key: 'groceries', label: 'Groceries' },
  { key: 'eating_out', label: 'Eating out' },
  { key: 'transport', label: 'Transport' },
  { key: 'bills', label: 'Bills' },
  { key: 'shopping', label: 'Shopping' },
  { key: 'health', label: 'Health' },
  { key: 'income', label: 'Income' },
  { key: 'other', label: 'Other' },
];

// Each shop name and the category its transactions belong to.
export const SHOP_RULES = [
  { shop: 'Greenbarrow Fresh', category: 'groceries' },
  { shop: 'Pennywhistle Market', category: 'groceries' },
  { shop: 'Lowtide Grocers', category: 'groceries' },
  { shop: 'Harvest Lane Foods', category: 'groceries' },
  { shop: 'Pasta, Pizza & Co', category: 'eating_out' },
  { shop: 'Kestrel Coffee Bar', category: 'eating_out' },
  { shop: 'Saltbush Noodle House', category: 'eating_out' },
  { shop: 'Ember Grill', category: 'eating_out' },
  { shop: 'Waverly Fuel Stop', category: 'transport' },
  { shop: 'Tramline Fares', category: 'transport' },
  { shop: 'Lantern Rideshare', category: 'transport' },
  { shop: 'Northgate Parking', category: 'transport' },
  { shop: 'Brightfield Power', category: 'bills' },
  { shop: 'Clearwater Utilities', category: 'bills' },
  { shop: 'Skyline Broadband', category: 'bills' },
  { shop: 'Hollis Insurance', category: 'bills' },
  { shop: 'Marlowe Homewares', category: 'shopping' },
  { shop: 'Quillon Books', category: 'shopping' },
  { shop: 'Fernhill Outfitters', category: 'shopping' },
  { shop: 'Pixel Parade Tech', category: 'shopping' },
  { shop: 'Larkspur Pharmacy', category: 'health' },
  { shop: 'Elmgrove Physio', category: 'health' },
  { shop: 'Cobalt Dental', category: 'health' },
  { shop: 'Sunnyvale Optical', category: 'health' },
  { shop: 'Brightwave Payroll', category: 'income' },
  { shop: 'Tidepool Interest', category: 'income' },
  { shop: 'Oakridge Dividends', category: 'income' },
];

// Returns the category key for a transaction description: the first shop
// whose name it contains, ignoring case, or `other` when no shop matches.
export function categoryOf(description) {
  const text = String(description).toLowerCase();
  const rule = SHOP_RULES.find(({ shop }) => text.includes(shop.toLowerCase()));
  return rule ? rule.category : 'other';
}
