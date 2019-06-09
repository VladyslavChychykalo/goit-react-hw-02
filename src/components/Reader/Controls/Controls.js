import React, { Component } from 'react';
import Counter from '../Counter/Counter';

export default class Controls extends Component {
  render() {
    return (
      <section className="controls">
        <Counter />
      </section>
    );
  }
}
