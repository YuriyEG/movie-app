import React, { useState } from 'react';

function TasksFilter({ setMode, all, active, completed }) {
  return (
    <ul className="filters">
      <li>
        <button
          className={all ? "selected" : "none"}
          onClick={(e) => setMode("all", e.target)}
        >
          All
        </button>
      </li>
      <li>
        <button
          className={active ? "selected" : "none"}
          onClick={(e) => setMode("active", e.target)}
        >
          Active
        </button>
      </li>
      <li>
        <button
          className={completed ? "selected" : "none"}
          onClick={(e) => setMode("completed", e.target)}
        >
          Completed
        </button>
      </li>
    </ul>
  );
}

export default TasksFilter;
