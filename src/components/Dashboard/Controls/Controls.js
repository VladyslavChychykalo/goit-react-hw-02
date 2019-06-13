import React, { Component } from 'react';

export default class Controls extends Component {
  state = {
    value: '',
  };
  render() {
    return (
      <section className="controls">
        <input type="number" />
        <button>Deposit</button>
        <button>Withdraw</button>
      </section>
    );
  }
}
