import React from "react";

import TasksFilter from '../TasksFilter/TasksFilter.js';


function Footer ({todoCount}) {

    return (
        <footer className="footer">
        <span className="todo-count">{todoCount} items left</span>
        <TasksFilter/>
        <button className="clear-completed">Clear completed</button>
      </footer>
      
    )
}

export default Footer;