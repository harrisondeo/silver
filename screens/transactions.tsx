import React from "react";

import "./transactions.styles.scss";
import Avatar from "../components/atoms/avatar/avatar";
import DateTile from "../components/atoms/dateTile/dateTile";
import Transaction from "../components/atoms/transaction/transaction";

const TransactionsPage = () => {
  return (
    <div className="transactionsPage__root">
      <div className="transactionsPage__title">
        <h2>Welcome back, Harrison!</h2>
      </div>
      <div className="transactionsPage__header">
        <div className="transactionsPage__account-info">
          <Avatar />
          <div>
            <h3>Harrison Deo</h3>
            <p>Account Number: 1234567890</p>
          </div>
        </div>
        <div className="transactionsPage__balance">
          <p>
            <b>£1,000.00</b>
          </p>
          <p className="transactionsPage__balance-caption">Balance</p>
        </div>
      </div>
      <div className="transactionsPage__transactions">
        <h3>Transactions</h3>
        <DateTile dateText="Today" />
        <div className="transactionsPage__transactions-list">
          <Transaction
            company="Amazon"
            description="Order #1234567890"
            amount={100}
            type="credit"
          />
          <Transaction
            company="Netflix"
            description="Premium plan"
            amount={10}
            type="debit"
          />
          <Transaction
            company="Spotify"
            description="Family membership"
            amount={5}
            type="credit"
          />
          <Transaction
            company="Apple"
            description="August subscription payment"
            amount={50}
            type="debit"
          />
        </div>
        <DateTile dateText="Yesterday" />
        <div className="transactionsPage__transactions-list">
          <Transaction
            company="Amazon"
            description="Order #1234567890"
            amount={100}
            type="debit"
          />
          <Transaction
            company="Netflix"
            description="Premium plan"
            amount={10}
            type="debit"
          />
          <Transaction
            company="Spotify"
            description="Family membership"
            amount={5}
            type="debit"
          />
          <Transaction
            company="Apple"
            description="August subscription payment"
            amount={50}
            type="credit"
          />
        </div>
      </div>
    </div>
  );
};

export default TransactionsPage;
