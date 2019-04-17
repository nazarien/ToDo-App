import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addTask, removeTask, completeTask, changeFilter } from '../../actions/actionCreator';

import ToDoInput from '../../components/todo-input/todo-input';
import ToDoList from '../../components/todo-list/todo-list';
import Footer from '../../components/footer/footer';

import './todo.css';


class ToDo extends Component {

  state = {
    taskText: ''
  }

  handleInputChange = ({ target: { value } }) => {
    this.setState({
      taskText: value
    })
  }

  addTask = ({ key }) => {
    const { taskText } = this.state;

    if (taskText.length > 0 && key === 'Enter') {
      const { addTask } = this.props;

      addTask((new Date()).getTime(), taskText, false);

      this.setState({
        taskText: '',
      })
    }
  }

  filterTasks = (tasks, activeFilter) => {
    switch (activeFilter) {
      case 'completed':
        return tasks.filter(tasks => tasks.isCompleted);
      case 'active':
        return tasks.filter(tasks => !tasks.isCompleted);
      default:
        return tasks;
    }

  }

  render() {
    const { tasks, removeTask, completeTask, filters, changeFilter } = this.props;
    const { taskText } = this.state;
    const tasksList = tasks;
    const isTasksExist = tasksList && tasksList.length > 0;
    const filteredTasks = this.filterTasks(tasks, filters);

    return (
      <div className="todo-wrapper">
        <ToDoInput onKeyPress1={this.addTask} onChange={this.handleInputChange} value={taskText} />
        {isTasksExist && <ToDoList tasksList={filteredTasks} completeTask={completeTask} removeTask={removeTask} />}
        {isTasksExist && <Footer amount={filteredTasks.length} activeFilter={filters} changeFilter={changeFilter} />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks,
  filters: state.filters,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    addTask, removeTask, completeTask, changeFilter
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ToDo);

// export default connect(state => ({
//   tasks: state.tasks,
// }), { addTask })(ToDo);
