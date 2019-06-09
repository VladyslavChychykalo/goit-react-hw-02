import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Controls = ({ onDecrement, onIncrement }) => (
  <section className="controls">
    <button type="button" className="button" onClick={onDecrement}>
      Назад
    </button>
    <button type="button" className="button" onClick={onIncrement}>
      Вперед
    </button>
  </section>
);

Controls.protoTypes = {
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

export default Controls;
