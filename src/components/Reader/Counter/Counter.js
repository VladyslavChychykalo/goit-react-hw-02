import React, { Component, Fragment } from 'react';
import Controls from '../Controls/Controls';

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
  };

  handleDecrement = () => {
    const { step } = this.props;
    const { value } = this.state;
    // this.setState({ value: value - step });
    value >= 2 &&
      this.setState(prevState => {
        return { value: prevState.value - step };
      });
  };
  handleIncrement = () => {
    const { step } = this.props;
    const { value } = this.state;
    // this.setState({ value: value + step });
    value <= 9 &&
      this.setState(prevState => {
        return { value: prevState.value + step };
      });
  };
  render() {
    const { value } = this.state;
    return (
      <Fragment>
        <p className="counter">{value}/10</p>
        <Controls
          onDecrement={this.handleDecrement}
          onIncrement={this.handleIncrement}
        />
      </Fragment>
    );
  }
}
