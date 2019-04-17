import React from 'react';
import PropTypes from 'prop-types';

import './todo-input.css';

const ToDoInput = ({ value, onChange, onKeyPress1 }) => (
  <div className="todo-input-wrapper">
    <i className="fas fa-plus" />
    <input
      className="todo-input"
      placeholder="Click to add task"
      onChange={onChange}
      value={value}
      onKeyPress={onKeyPress1}
    />
  </div>
);

ToDoInput.propTypes = {
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  value: PropTypes.string,
}

ToDoInput.defaultProps = {
  onChange: () => {},
  onKeyPress: () => {},
  value: '',
}

export default ToDoInput;
