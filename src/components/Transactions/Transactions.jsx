import React from 'react';
import classes from './Transaction.module.css';

export const Transactions = props => {
  return (
    <div>
      <table class="transaction-history" className={classes.tableContainer}>
        <thead>
          <tr >
            <th className={classes.tableTitle}>Type</th>
            <th className={classes.tableTitle}>Amount</th>
            <th className={classes.tableTitle}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {props.transactions.map(transition  => {
            return (
                <tr className={classes.transitionTable} key={transition.id}>
                    <td>{transition.type}</td>
                    <td>{transition.amount}</td>
                    <td>{transition.currency}</td>
                </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
};


