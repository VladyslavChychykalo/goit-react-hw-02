import React, { Component } from 'react';
import Controls from './Controls/Controls';
import Balance from './Balance/Balance';
import TransactionHistory from './TransactionHistory/TransactionHistory';

export default class Dashboard extends Component {
  state = {
    history: [],
    balance: 0,
  };

  handleDeposit(item) {
    const { history, balance } = this.state;
    this.setState({
      balance: balance + item.amount,
      history: [...history, item],
    });
  }

  handleWithdraw(item) {
    const { history, balance } = this.state;
    this.setState({
      balance: balance - item.amount,
      history: [...history, item],
    });
  }
  render() {
    const { balance, history } = this.state;
    return (
      <div class="dashboard">
        <Controls
          onDeposit={this.handleDeposit}
          onWithdraw={this.handleWithdraw}
        />
        <Balance balance={balance} history={history} />
        <TransactionHistory history={history} />
      </div>
    );
  }
}
