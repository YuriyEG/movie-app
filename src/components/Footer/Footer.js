import React from "react";


import TasksFilter from '../TasksFilter/TasksFilter.js';



class Footer extends React.Component  {

  render() {
    
    return (
        <footer className="footer">
        <span className="todo-count">{this.props.todoCount} items left</span>
        <TasksFilter/>
        <button className="clear-completed">Clear completed</button>
      </footer>
      
    )
    
  }
}

export default Footer;