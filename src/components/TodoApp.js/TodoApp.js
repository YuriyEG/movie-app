import React from "react";
import { useState } from "react";

import Footer from "../Footer/Footer";
import NewTaskForm from "../NewTaskForm/NewTaskForm";
import TaskList from "../TaskList/TaskList";




function TodoApp () {

    const [ todoList, setTodoList ] = useState([
      {value: 'first', id: 1, important: false, done: false},
     {value: 'second', id: 2, important: false, done: false}
    ]);

    

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

    function onToggleImportant(id) {
      const indx = todoList.findIndex( (el) => el.id === id);
      const oldItem = todoList[indx];
      const newItem = {...oldItem, important: !oldItem.important}

      const newArray = [
        ...todoList.slice(0, indx),
        newItem,
        ...todoList.slice(indx + 1)
      ]
      setTodoList(newArray);

    }


    function onToggleDone(id) {
      const indx = todoList.findIndex( (el) => el.id === id);
      const oldItem2 = todoList[indx];
      const newItem2 = {...oldItem2, done: !oldItem2.done}
      
      const newArray2 = [
        ...todoList.slice(0, indx),
        newItem2,
        ...todoList.slice(indx + 1)
      ]
      setTodoList(newArray2);
      
    }

    const doneCount = todoList.filter( (el) => el.done).length;
    const todoCount = todoList.length - doneCount;



    console.log(todoList);

    return (
      
        <div className="todoapp">
        <section className='main'>
          <NewTaskForm createTask={createTask}
                       
          />
          <TaskList todoList={todoList} 
                    deleteTask={deleteTask}
  
                    onToggleImportant={onToggleImportant}
                    onToggleDone={onToggleDone}
                    />
          <Footer
            todoCount={todoCount}
          />
        </section>

          
          </div>
    )
}

export default TodoApp;