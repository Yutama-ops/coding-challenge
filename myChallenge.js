#!/usr/bin/env node
const fs = require('fs');

const main = () => {
  const rawData = fs.readFileSync('data.json', 'utf-8');
  const data = JSON.parse(rawData);

  console.log(data);
}

main();
