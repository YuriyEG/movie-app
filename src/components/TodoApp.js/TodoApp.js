import React from "react";

import Footer from "../Footer/Footer";
import NewTaskForm from "../NewTaskForm/NewTaskForm";
import TaskList from "../TaskList/TaskList";




function TodoApp () {

    return (
      
        <div className="todoapp">
        <section className='main'>
          <NewTaskForm/>
          <TaskList/>
          <Footer/>
        </section>

          
          </div>
    )
}

export default TodoApp;