// Helper function to calculate the sum of account values based on filters
const calculateSum = (data, filters) => {
  return data
    .filter(account => Object.keys(filters).every(key => account[key] === filters[key]))
    .reduce((sum, account) => sum + account.total_value, 0);
};

const calculateMetrics = (data) => {
  const accounts = data.data;

  const revenue = calculateSum(accounts, { account_category: 'revenue' });
  const expenses = calculateSum(accounts, { account_category: 'expense' });

  const sales = calculateSum(accounts, { account_type: 'sales', value_type: 'debit' });

  const grossProfitMargin = (sales / revenue) * 100;

  return {
    revenue,
    expenses,
    grossProfitMargin,
  };
};

export { calculateMetrics };
