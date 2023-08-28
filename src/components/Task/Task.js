import React, { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
// import PropTypes from 'prop-types';

import './Task.css';
import Edit from '../Edit/Edit';

function Task({ value, deleteTask, setTodoList, id, onToggleImportant, onToggleDone, important, done, time }) {
  const [editStatus, setEditStatus] = useState(false);
  const [editValue, setEditValue] = useState(value);

  let taskClass = '';
  if (done) {
    taskClass = 'description classDone';
  } else {
    taskClass = 'description';
  }

  let checkClass = '';
  if (important) {
    checkClass = 'checkedImageBase checkedImage';
  } else {
    checkClass = 'checkedImageBase uncheckedImage';
  }

  const initialEdit = () => {
    setEditStatus(true);
  };

  const setValue = (e) => {
    setEditValue(e.target.value);
  };

  const saveTodo = (e) => {
    if (e.keyCode === 13 && e.target.value.replace(/ /g, '').length) {
      setTodoList(id, editValue);
      setEditStatus(false);
    }
  };

  const distance = formatDistanceToNow(time, { includeSeconds: true });

  const todoItem = (
    <div>
      <li>
        <div className="view">
          <div className={checkClass} onClick={onToggleImportant}></div>
          <label>
            <span className={taskClass} onClick={onToggleDone}>
              {value}
            </span>
            <span className="created">created {distance} ago</span>
          </label>
          <button className="icon icon-edit" onClick={initialEdit}></button>
          <button className="icon icon-destroy" onClick={() => deleteTask(id)}></button>
        </div>
      </li>
    </div>
  );

  return <div>{editStatus ? <Edit saveTodo={saveTodo} editValue={editValue} setValue={setValue} /> : todoItem}</div>;
}

export default Task;
