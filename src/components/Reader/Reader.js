import React, { Component } from 'react';
import Counter from './Counter/Counter';

export default class Reader extends Component {
  static defaultProp = {};
  static propTypes = {};

  render() {
    const { items } = this.props;
    return (
      <div className="reader">
        <Counter items={items} step={1} initialValue={1} />
      </div>
    );
  }
}
