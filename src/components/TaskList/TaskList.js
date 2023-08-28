import React from 'react';
import PropTypes from 'prop-types';

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

TaskList.defaultProps = {
  key: 0,
  deleteTask: () => {},
  id: 0,
  onToggleDone: () => {},
  onToggleImportant: () => {},
  done: false,
  important: false,
  time: {},
  value: 'default value',
  todoList: [],
  node: {},
  setTodoList: () => {},
};

TaskList.PropTypes = {
  key: PropTypes.number,
  deleteTask: PropTypes.func,
  id: PropTypes.number,
  onToggleDone: PropTypes.func,
  onToggleImportant: PropTypes.func,
  done: PropTypes.bool,
  important: PropTypes.bool,
  time: PropTypes.object,
  value: PropTypes.string,
  todoList: PropTypes.array,
  node: PropTypes.object,
  setTodoList: PropTypes.array,
};

export default TaskList;
