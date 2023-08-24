import React from "react";


function Task ({value, deleteTask, id}) {



    return (
        <li>
                <div className="view">
                  <input className="toggle" type="checkbox"/>
                  <label>
                    <span className="description">{value}</span>
                    <span className="created">created 17 seconds ago</span>
                  </label>
                  <button className="icon icon-edit"></button>
                  <button className="icon icon-destroy" onClick={() => deleteTask(id)}></button>
                </div>
              </li>
    )
}

export default Task;