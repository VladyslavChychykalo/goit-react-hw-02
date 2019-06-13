import React, { Component, Fragment } from 'react';
import Publication from './Publication/Publication';
import Controls from './Controls/Controls';

export default class Counter extends Component {
  // static defaultProp = { step: 1 };

  // constructor(props) {
  //   super(props);
  //   this.state = { value: props.step };
  //   // this.handleDecrement = this.handleDecrement.bind(this);
  //   // this.handleIncrement = this.handleIncrement.bind(this);
  // }

  state = {
    value: this.props.initialValue,
    index: 0,
  };

  // changeIndex = step => {
  //   const { index } = this.state;
  //   this.setState({
  //     index: index + step,
  //   });
  // };

  handleDecrement = () => {
    const { step } = this.props;
    const { value } = this.state;
    const { index } = this.state;
    value >= 2 &&
      this.setState(prevState => {
        return { value: prevState.value - step, index: index - step };
      });
  };

  handleIncrement = () => {
    const { step } = this.props;
    const { value } = this.state;
    const { index } = this.state;
    value <= 11 &&
      this.setState(prevState => {
        return { value: prevState.value + step, index: index + step };
      });
  };

  render() {
    const { value } = this.state;
    const { items } = this.props;
    const { index } = this.state;
    return (
      <Fragment>
        <Publication item={items[index]} />
        <p className="counter">{value}/12</p>
        <Controls
          onDecrement={this.handleDecrement}
          onIncrement={this.handleIncrement}
        />
      </Fragment>
    );
  }
}
