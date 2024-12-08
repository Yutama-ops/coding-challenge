import { calculateMetrics } from '../src/calculate.js';

test('calculate metrics', () => {
  const data = {
    data: [
      { account_category: 'revenue', total_value: 1000 }
    ]
  };

  const metrics = calculateMetrics(data);
  expect(metrics.revenue).toBe(1000);
});
