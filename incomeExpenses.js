import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h2>Income</h2>
        <p id="money-plus" className="money plus"><b>+${income}</b></p>
      </div>
      <div>
        <h2>Expense</h2>
        <p id="money-minus" className="money minus"><b>-${expense}</b></p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
