import React from 'react';

const Edit = ({ editValue, setValue, saveTodo }) => {
  return (
    <li className="editing">
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>
          <span className="description">Editing task</span>
          <span className="created">created 5 minutes ago</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
      </div>
      <input
        type="text"
        value={editValue}
        onKeyDown={(e) => saveTodo(e)}
        onChange={(e) => setValue(e)}
        className="edit"
      />
    </li>
  );
};

export default Edit;
