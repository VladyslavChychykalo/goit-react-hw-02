import React, { Component } from 'react';

export default class Balance extends Component {
  state = {};
  render() {
    return (
      <section className="balance">
        <span>⬆️2000$</span>
        <span>⬇️1000$</span>
        <span>Balance: 5000$</span>
      </section>
    );
  }
}
