import React, { Component } from 'react';

export default class TransactionHistory extends Component {
  state = {};
  render() {
    return (
      <table class="history">
        <thead>
          <tr>
            <th>Transaction</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Deposit</td>
            <td>200$</td>
            <td>4/17/2019, 12:45:17</td>
          </tr>
          <tr>
            <td>Withdrawal</td>
            <td>100$</td>
            <td>4/18/2019, 14:15:23</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
