import React, { useContext } from "react";
import { GlobalContext } from "../context.js/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const transactionAmounts = transactions.map(
    (transaction) => transaction.transactionAmount
  );
  const balance = transactionAmounts
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  return (
    <>
      <h4>Account Balace</h4>
      {/* Credit and Debit Balance  */}
      <h1>${balance}</h1>
    </>
  );
};

export default Balance;
