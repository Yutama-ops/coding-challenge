const calculateMetrics = (data) => {
  const revenue = data.data
    .filter(account => account.account_category === 'revenue')
    .reduce((sum, account) => sum + account.total_value, 0);

  const expenses = data.data
    .filter(account => account.account_category === 'expense')
    .reduce((sum, account) => sum + account.total_value, 0);


  return {
    revenue,
    expenses
  };
};


export { calculateMetrics };
