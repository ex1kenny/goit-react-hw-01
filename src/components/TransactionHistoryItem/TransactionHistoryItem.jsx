export const TransactionHistoryItem = ({ transaction }) => {
  return (
    <tr>
      <td>{transaction.type}</td>
      <td>{transaction.amount}</td>
      <td>{transaction.currency}</td>
    </tr>
  );
};
