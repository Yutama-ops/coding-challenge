const formatCurrency = (value) => `$${
  value.toFixed(0)
  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;

const formatPercentage = (value) => `${value.toFixed(1)}%`;

export { formatCurrency, formatPercentage };
