#!/usr/bin/env node
import { calculateMetrics } from './src/calculate.js';
import fs from 'fs';


const main = () => {
  const rawData = fs.readFileSync('data.json', 'utf-8');
  const data = JSON.parse(rawData);

  const metrics = calculateMetrics(data);
}
main();
