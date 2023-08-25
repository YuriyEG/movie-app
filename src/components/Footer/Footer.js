import React from 'react';

import TasksFilter from '../TasksFilter/TasksFilter';

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

export default Footer;
