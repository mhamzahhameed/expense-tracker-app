import React, { useState, useContext } from "react";
import { GlobalContext } from "../context.js/GlobalState";
const AddTransaction = () => {
  const [description, setDescription] = useState("");
  const [transactionAmount, setTransactionAmount] = useState("");

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: new Date().getTime(),
      description,
      transactionAmount: +transactionAmount,
    };

    addTransaction(newTransaction);
  };

  return (
    <div>
      <h3>Add New Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className='form-control'>
          <label htmlFor='description'>Description</label>
          <input
            type='text'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder='Detail of Transaction'
            required='required'
          />
        </div>
        <div className='form-control'>
          <label htmlFor='transactionamount'>Transaction Amount</label>
          <input
            type='number'
            value={transactionAmount}
            onChange={(e) => setTransactionAmount(e.target.value)}
            placeholder='Dollar Value of Transaction'
            required='required'
          />
        </div>
        <button className='btn'>Add Transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
