#!/usr/bin/env node
import { calculateMetrics } from './src/calculate.js';
import { formatCurrency, formatPercentage } from './src/formatter.js';
import fs from 'fs';


const logMetrics = (messages, formatter) => {
  console.log(`${messages} ${formatter}`);
}

const main = () => {
  const rawData = fs.readFileSync('data.json', 'utf-8');
  const data = JSON.parse(rawData);

  const metrics = calculateMetrics(data);

  logMetrics('Revenue:', formatCurrency(metrics.revenue));
  logMetrics('Expenses:', formatCurrency(metrics.expenses));
  logMetrics('Gross Profit Margin:', formatPercentage(metrics.grossProfitMargin));
  logMetrics('Net Profit Margin:', formatPercentage(metrics.netProfitMargin));
  logMetrics('Working Capital Ratio:', formatPercentage(metrics.workingCapitalRatio));
}
main();
