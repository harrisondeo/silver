import React from "react";

import "./transaction.styles.scss";

interface TransactionProps {
  description: string;
  company: string;
  amount: number;
  type: "credit" | "debit";
}

const Transaction = ({
  description,
  company,
  amount,
  type,
}: TransactionProps) => {
  return (
    <div className="transactionsPage__transaction">
      <div className="transactionsPage__transaction-info">
        <p>{company}</p>
        <p className="transactionsPage__transaction-description">
          {description}
        </p>
      </div>
      <p
        className={`transactionsPage__transaction-amount ${type === "credit" ? "negative" : "positive"}`}
      >
        {type === "credit" ? "-" : ""}£{amount}
      </p>
    </div>
  );
};

export default Transaction;
