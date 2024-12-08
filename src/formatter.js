const formatCurrency = (value) => {
  if (value == null || isNaN(value)) {
    return '$0';
  }
  return `$${value.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
};

const formatPercentage = (value) => {
  if (value == null || isNaN(value)) {
    return '0.0%';
  }
  return `${value.toFixed(1)}%`;
};

export { formatCurrency, formatPercentage };
