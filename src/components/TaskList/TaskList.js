import React from 'react';

import Task from '../Task/Task';

import './TaskList.css';

function TaskList(props) {
  return (
    <ul className="todo-list">
      {props.todoList.map((node) => {
        return (
          <Task
            key={node.id}
            deleteTask={props.deleteTask}
            id={node.id}
            onToggleDone={() => props.onToggleDone(node.id)}
            onToggleImportant={() => props.onToggleImportant(node.id)}
            done={node.done}
            important={node.important}
            time={node.time}
            value={node.value}
            node={node}
            todoList={props.todoList}
            setTodoList={props.setTodoList}
          />
        );
      })}
    </ul>
  );
}

export default TaskList;
