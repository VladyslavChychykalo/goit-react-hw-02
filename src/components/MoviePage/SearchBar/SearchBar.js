import React, { Component, Fragment } from 'react';

export default class SearchBar extends Component {
  state = {
    inputValue: '',
  };

  // handleChange = e => {
  //   this.setState({
  //     inputValue: e.target.value,
  //   });
  // };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <Fragment>
        <input name="inputValue" type="text" class="input" value={inputValue} />
      </Fragment>
    );
  }
}
