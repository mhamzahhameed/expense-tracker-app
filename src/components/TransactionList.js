import React, { useContext } from "react";
import { GlobalContext } from "../context.js/GlobalState";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <>
      {/* Transaction History  */}
      <h3>Transaction History</h3>
      {/* List of Transactions  */}
      <ul className='list'>
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
