import React from 'react';
import PropTypes from 'prop-types';

import './todo-item.css';

const ToDoItem = ({ text, isCompleted, removeTask, id, completeTask }) => (
  <li className="todo-item">
    <i onClick={() => completeTask(id)} className={isCompleted ? 'mark far fa-check-circle' : 'mark far fa-circle'} >
      C
    </i>
    <span className={isCompleted ? 'completed text' : 'text'}>{text}</span>
    <i onClick={() => removeTask(id)} className="fas fa-times" >
      Remove
    </i>
  </li>
);

ToDoItem.propTypes = {
  text: PropTypes.string,
  id: PropTypes.number,
  isCompleted: PropTypes.bool,
  removeTask: PropTypes.func,
}

ToDoItem.defaultProps = {
  text: '',
  id: null,
  isCompleted: false,
  removeTask: () => {},
}

export default ToDoItem;
