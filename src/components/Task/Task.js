import React from 'react';
import { formatDistanceToNow } from 'date-fns';

import './Task.css';

function Task({ value, deleteTask, id, onToggleImportant, onToggleDone, important, done, time }) {
  let taskClass = 'description';
  if (important) {
    taskClass += ' classImportant';
  }
  if (done) {
    taskClass += ' classDone';
  }

  const check = document.querySelector('#check');

  const distance = formatDistanceToNow(time, { includeSeconds: true });
  console.log('distance', distance);

  return (
    <li>
      <div className="view">
        <input className="toggle" id="check" onChange={onToggleImportant} type="checkbox" />
        <label>
          <span className={taskClass} onClick={onToggleDone}>
            {value}
            {value}
          </span>
          <span className="created">created {distance} ago</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy" onClick={() => deleteTask(id)}></button>
      </div>
    </li>
  );
}

export default Task;
