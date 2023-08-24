import React from "react";

import Task from '../Task/Task.js';


function TaskList (props) {

    return (

        <ul className="todo-list">

            {
                props.todoList.map( node => {
                  let value = node.value;
                  return <Task value={value} key = {node.id} deleteTask={props.deleteTask} id={node.id} />
                })
            }
              
              {/* <li class="completed">
                <div class="view">
                  <input class="toggle" type="checkbox">
                  <label>
                    <span class="description">Completed task</span>
                    <span class="created">created 17 seconds ago</span>
                  </label>
                  <button class="icon icon-edit"></button>
                  <button class="icon icon-destroy"></button>
                </div>
              </li>
              <li class="editing">
                <div class="view">
                  <input class="toggle" type="checkbox">
                  <label>
                    <span class="description">Editing task</span>
                    <span class="created">created 5 minutes ago</span>
                  </label>
                  <button class="icon icon-edit"></button>
                  <button class="icon icon-destroy"></button>
                </div>
                <input type="text" class="edit" value="Editing task">
              </li>
              <li>
                <div class="view">
                  <input class="toggle" type="checkbox">
                  <label>
                    <span class="description">Active task</span>
                    <span class="created">created 5 minutes ago</span>
                  </label>
                  <button class="icon icon-edit"></button>
                  <button class="icon icon-destroy"></button>
                </div>
              </li> */}
            </ul>

    )
}


export default TaskList;