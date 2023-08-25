import React from 'react';

function NewTaskForm({ createTask }) {
  return (
    <header className="header">
      <h1>todos</h1>
      <input className="new-todo" onKeyDown={(e) => createTask(e)} placeholder="What needs to be done?" autoFocus />
    </header>
  )
}

export default NewTaskForm;
