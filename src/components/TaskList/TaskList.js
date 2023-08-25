import React from 'react';

import Task from '../Task/Task';

function TaskList(props) {
  return (
    <ul className="todo-list">
      {props.todoList.map((node) => {
        if (props.listMode === 'all') {
          const { value } = node;
          return (
            <Task
              value={value}
              key={node.id}
              deleteTask={props.deleteTask}
              id={node.id}
              onToggleDone={() => props.onToggleDone(node.id)}
              onToggleImportant={() => props.onToggleImportant(node.id)}
              done={node.done}
              important={node.important}
              time={node.time}
            />
          );
        }

        if (props.listMode === 'completed') {
          if (node.done) {
            const { value } = node;
            return (
              <Task
                value={value}
                key={node.id}
                deleteTask={props.deleteTask}
                id={node.id}
                onToggleDone={() => props.onToggleDone(node.id)}
                onToggleImportant={() => props.onToggleImportant(node.id)}
                done={node.done}
                important={node.important}
                time={node.time}
              />
            );
          }
        }

        if (props.listMode === 'active') {
          if (!node.done) {
            const { value } = node;
            return (
              <Task
                value={value}
                key={node.id}
                deleteTask={props.deleteTask}
                id={node.id}
                onToggleDone={() => props.onToggleDone(node.id)}
                onToggleImportant={() => props.onToggleImportant(node.id)}
                done={node.done}
                important={node.important}
                time={node.time}
              />
            );
          }
        }
      })}
    </ul>
  );
}

export default TaskList;
