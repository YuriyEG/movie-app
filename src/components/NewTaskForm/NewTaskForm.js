import React from 'react';
import './NewTaskForm.css';
import PropTypes from 'prop-types';

function NewTaskForm({ createTask }) {
  return (
    <header className="header">
      <h1>todos</h1>
      <input className="new-todo" onKeyDown={(e) => createTask(e)} placeholder="What needs to be done?" autoFocus />
    </header>
  );
}

NewTaskForm.defaultProps = {
  createTask: () => {},
};

NewTaskForm.PropTypes = {
  createTask: PropTypes.func,
};

export default NewTaskForm;
