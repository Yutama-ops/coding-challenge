import { calculateMetrics } from '../src/calculate.js';

test('calculate metrics', () => {
  const data = {
    data: [
      {
        "account_category": "revenue",
        "total_value": 1000.0
    },
    {
        "account_category": "expense",
        "total_value": 500.0,
    },
    {
      "value_type": "debit",
      "account_category": "expense",
      "account_type": "sales",
      "total_value": 500.0,
  },
    ]
  };

  const metrics = calculateMetrics(data);

  expect(metrics.revenue).toBe(1000);
  expect(metrics.expenses).toBe(1000);
  expect(metrics.grossProfitMargin).toBe(50);
});
