// Helper function to calculate the sum of account values based on filters
const calculateSum = (data, filters) => {
  return data
    .filter(account =>
      Object.keys(filters).every(key =>
        Array.isArray(filters[key])
          ? filters[key].includes(account[key])
          : account[key] === filters[key]
      )
    )
    .reduce((sum, account) => sum + account.total_value, 0);
};

const calculateMetrics = (data) => {
  const accounts = data.data;

  const revenue = calculateSum(accounts, { account_category: 'revenue' });
  const expenses = calculateSum(accounts, { account_category: 'expense' });

  const sales = calculateSum(accounts, { account_type: 'sales', value_type: 'debit' });
  const grossProfitMargin = (sales / revenue) * 100;

  const netProfitMargin = ((revenue - expenses) / revenue) * 100;

  const assets = calculateSum(accounts,
    {
      account_category: 'asset',
      value_type: 'debit',
      account_type: ['current', 'bank', 'current_accounts_receivable']
    }) - calculateSum(accounts,
      {
        account_category: 'asset',
        value_type: 'credit',
        account_type: ['current', 'bank', 'current_accounts_receivable']
      }
    );

  const liabilities = calculateSum(accounts,
    {
      account_category: 'liability',
      value_type: 'credit',
      account_type: ['current', 'current_accounts_payable']
    }) - calculateSum(accounts,
      {
        account_category: 'liability',
        value_type: 'debit',
        account_type: ['current', 'current_accounts_payable']
      }
    );

  const workingCapitalRatio = assets / liabilities * 100;

  return {
    revenue,
    expenses,
    grossProfitMargin,
    netProfitMargin,
    assets,
    liabilities,
    workingCapitalRatio,
  };
};

export { calculateMetrics };
