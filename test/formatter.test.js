import { formatCurrency, formatPercentage } from '../src/formatter.js';

test('format currency', () => {
  expect(formatCurrency(1000000000)).toBe('$1,000,000,000');
});

test('format percentage', () => {
  expect(formatPercentage(12.33333)).toBe('12.3%');
});
