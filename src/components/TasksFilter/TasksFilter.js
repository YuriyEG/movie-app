import React from 'react';
import PropTypes from 'prop-types';
import './TasksFilter.css';

function TasksFilter({ setMode, all, active, completed }) {
  return (
    <ul className="filters">
      <li>
        <button className={all ? 'selected' : 'none'} onClick={(e) => setMode('all', e.target)}>
          All
        </button>
      </li>
      <li>
        <button className={active ? 'selected' : 'none'} onClick={(e) => setMode('active', e.target)}>
          Active
        </button>
      </li>
      <li>
        <button className={completed ? 'selected' : 'none'} onClick={(e) => setMode('completed', e.target)}>
          Completed
        </button>
      </li>
    </ul>
  );
}

TasksFilter.defaultProps = {
  setMode: 'default string',
  all: false,
  active: false,
  completed: false,
};

TasksFilter.PropTypes = {
  setMode: PropTypes.string,
  all: PropTypes.bool,
  active: PropTypes.bool,
  completed: PropTypes.bool,
};

export default TasksFilter;
