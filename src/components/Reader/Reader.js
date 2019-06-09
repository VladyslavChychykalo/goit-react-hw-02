import React, { Component } from 'react';
import Publication from './Publication/Publication';
import Counter from './Counter/Counter';

export default class Reader extends Component {
  static defaultProp = {};
  static propTypes = {};

  state = {
    items: this.props.items,
  };
  render() {
    return (
      <div className="reader">
        <Publication />
        <Counter step={1} initialValue={1} />
      </div>
    );
  }
}
