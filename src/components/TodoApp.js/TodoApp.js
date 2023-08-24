import React from "react";
import { useState } from "react";

import Footer from "../Footer/Footer";
import NewTaskForm from "../NewTaskForm/NewTaskForm";
import TaskList from "../TaskList/TaskList";




function TodoApp () {

    const [ todoList, setTodoList ] = useState([{value: 'first', id: 1}, {value: 'second', id: 2}]);

    function createTask(e) {

        if (e.keyCode === 13 && (e.target.value).replace(/ /g, '').length ) {
          const newTask = { value: e.target.value, id: todoList.length + Math.random(), important: false };
          e.target.value = '';
          const newTodoList = [newTask, ...todoList];
          setTodoList(newTodoList);
        }

    }

    function deleteTask(id) {

      const filteredList = [...todoList].filter(el => el.id !== id);
      setTodoList(filteredList);
    
    }

    console.log(todoList);

    return (
      
        <div className="todoapp">
        <section className='main'>
          <NewTaskForm createTask={createTask}/>
          <TaskList todoList={todoList} deleteTask={deleteTask}/>
          <Footer/>
        </section>

          
          </div>
    )
}

export default TodoApp;