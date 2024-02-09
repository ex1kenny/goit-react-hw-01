import css from "./TransactionHistory.module.css";

import { TransactionHistoryItem } from "../TransactionHistoryItem/TransactionHistoryItem";

export const TransactionHistory = ({ transactions }) => {
  return (
    <table className={css.transactionHistoryList}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <TransactionHistoryItem
            key={transaction.id}
            transaction={transaction}
          />
        ))}
      </tbody>
    </table>
  );
};
