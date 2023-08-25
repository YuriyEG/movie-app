import React, { useEffect } from "react";
import { useState } from "react";

import Footer from "../Footer/Footer";
import NewTaskForm from "../NewTaskForm/NewTaskForm";
import TaskList from "../TaskList/TaskList";




function TodoApp () {

    const [ todoList, setTodoList ] = useState([
      {value: 'first', id: 1, important: false, done: false, time: new Date()},
     {value: 'second', id: 2, important: false, done: false, time: new Date()}
    ]);

    const [ all, setAll] = useState(true);
    const [active, setActive] = useState(false);
    const [completed, setCompleted] = useState(false);

    const [listMode, setListMode] = useState('All');

   

    

    function createTask(e) {

        if (e.keyCode === 13 && (e.target.value).replace(/ /g, '').length ) {
          const newTask = { value: e.target.value, id: todoList.length + Math.random(), 
            important: false, done: false, time: new Date() };
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

    function clearCompleted () {

      let newArray = [];
      [...todoList].forEach( node => {
        console.log(node);
        if (node.done !== true) {
          newArray.push(node);
        }
      })
       setTodoList(newArray);
    }

    const doneCount = todoList.filter( (el) => el.done).length;
    const todoCount = todoList.length - doneCount;

    function setMode(mode, el) {
        
        ['active', 'all','completed'].forEach( node => {
          
            if (mode === 'active') {
              setActive(true);
              setAll(false);
              setCompleted(false);
            }
            if (mode === 'completed') {
              setCompleted(true);
              setAll(false);
              setActive(false);
            }
            if (mode === 'all') {
              setCompleted(false);
              setAll(true);
              setActive(false);
            }

        })
        console.log(mode, el);
    }

    return (
      
        <div className="todoapp">
        <section className='main'>
          <NewTaskForm createTask={createTask}
                       
          />
          <TaskList todoList={todoList} 
                    deleteTask={deleteTask}
  
                    onToggleImportant={onToggleImportant}
                    onToggleDone={onToggleDone}
                    listMode={listMode}
                    
                    />
          <Footer
            todoCount={todoCount}
            clearCompleted={clearCompleted}
            setMode={setMode}
            all={all}
            active={active}
            completed={completed}
            setListMode={setListMode}
          />
        </section>

          
          </div>
    )
}

export default TodoApp;