import React from 'react';
import PropTypes from 'prop-types';

import TasksFilter from '../TasksFilter/TasksFilter';
import './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <span className="todo-count">{this.props.todoCount} items left</span>
        <TasksFilter
          completed={this.props.completed}
          active={this.props.active}
          all={this.props.all}
          setMode={this.props.setMode}
        />
        <button className="clear-completed" onClick={this.props.clearCompleted}>
          Clear completed
        </button>
      </footer>
    );
  }
}

Footer.defaultProps = {
  todoCount: 999,
  completed: false,
  active: false,
  all: false,
  setMode: () => {},
  clearCompleted: () => {},
};

Footer.PropTypes = {
  todoCount: PropTypes.number,
  completed: PropTypes.bool,
  active: PropTypes.bool,
  all: PropTypes.bool,
  setMode: PropTypes.func,
  clearCompleted: PropTypes.func,
};

export default Footer;
