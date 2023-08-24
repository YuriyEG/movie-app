import React from "react";

import '../Task/Task.css';



function Task ({value, deleteTask, id, onToggleImportant, onToggleDone, important, done}) {

   
    let taskClass = 'description';
    if (important) {
      taskClass += ' classImportant';
    }
    if (done) {
      taskClass += ' classDone';
    }
    
   

    return (
        <li>
                <div className="view">
                  <input className="toggle" onChange={onToggleImportant} type="checkbox"/>
                  <label>
                    <span className={taskClass}
                          
                    onClick={onToggleDone}
                  
                    >{value}</span>
                    <span className="created">created 17 seconds ago</span>
                  </label>
                  <button className="icon icon-edit"></button>
                  <button className="icon icon-destroy" onClick={() => deleteTask(id)}></button>
                </div>
              </li>
    )
}

export default Task;