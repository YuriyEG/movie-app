import React from 'react';
import PropTypes from 'prop-types';

import Footer from '../Footer/Footer';
import NewTaskForm from '../NewTaskForm/NewTaskForm';
import TaskList from '../TaskList/TaskList';

class TodoApp extends React.Component {
  constructor() {
    super();
    this.state = {
      all: true,
      active: false,
      completed: false,
      listMode: 'all',
      todoList: [
        { value: 'first', id: 1, important: false, done: false, time: new Date() },
        { value: 'second', id: 2, important: false, done: false, time: new Date() },
      ],
    };
  }

  // App.defaultProps = {
  //   todos: [],
  //   deleteItem: () => {},
  //   editItem: () => {},
  //   filter: 'all',
  //   filterChange: () => {},
  //   todoCount: 0,
  // };

  // App.propTypes = {
  //   todos: PropTypes.array,
  //   editItem: PropTypes.func,
  //   deleteItem: PropTypes.func,
  //   filter: PropTypes.string,
  //   filterChange: PropTypes.func,
  //   todoCount: PropTypes.number,
  // };

  render() {
    let filteredTasks = this.state.todoList;
    if (this.state.listMode === 'active') {
      filteredTasks = this.state.todoList.filter((node) => node.done === false);
    }
    if (this.state.listMode === 'completed') {
      filteredTasks = this.state.todoList.filter((node) => node.done === true);
    }

    const createTask = (e) => {
      if (e.keyCode === 13 && e.target.value.replace(/ /g, '').length) {
        const newTask = {
          value: e.target.value,
          id: this.state.todoList.length + Math.random(),
          important: false,
          done: false,
          time: new Date(),
        };
        e.target.value = '';
        const newTodoList = [newTask, ...this.state.todoList];

        this.setState({
          todoList: newTodoList,
        });
      }
    };

    const deleteTask = (id) => {
      const filteredList = [...this.state.todoList].filter((el) => el.id !== id);
      this.setState({
        todoList: filteredList,
      });
    };

    const onToggleImportant = (id) => {
      const indx = this.state.todoList.findIndex((el) => el.id === id);
      const oldItem = this.state.todoList[indx];
      const newItem = { ...oldItem, important: !oldItem.important };

      const newArray = [...this.state.todoList.slice(0, indx), newItem, ...this.state.todoList.slice(indx + 1)];
      this.setState({
        todolist: newArray,
      });
    };

    const onToggleDone = (id) => {
      const indx = this.state.todoList.findIndex((el) => el.id === id);
      const oldItem2 = this.state.todoList[indx];
      const newItem2 = { ...oldItem2, done: !oldItem2.done };

      const newArray2 = [...this.state.todoList.slice(0, indx), newItem2, ...this.state.todoList.slice(indx + 1)];
      this.setState({
        todoList: newArray2,
      });
    };

    const setListMode = (mode) => {
      if (mode === 'active') {
        this.setState({ active: true });
        this.setState({ all: false });
        this.setState({ completed: false });
      }
      if (mode === 'completed') {
        this.setState({ completed: true });
        this.setState({ all: false });
        this.setState({ active: false });
                }





      if (mode === 'all') {
        this.setState({ completed: false });
        this.setState({ all: true });
        this.setState({ active: false });
      }

      this.setState({ listMode: mode });
    };

    const clearCompleted = () => {
      const newArray = [];
      [...this.state.todoList].forEach((node) => {
        if (node.done !== true) {
          newArray.push(node);
        }
      });
      this.setState({ todoList: newArray });
    };

    const doneCount = this.state.todoList.filter((el) => el.done).length;
    const todoCount = this.state.todoList.length - doneCount;
    return (
      <div className="todoapp">
        <section className="main">
          <NewTaskForm createTask={createTask} />
          <TaskList
            todoList={filteredTasks}
            deleteTask={deleteTask}
            onToggleImportant={onToggleImportant}
            onToggleDone={onToggleDone}
            listMode={this.state.listMode}
          />
          <Footer
            todoCount={todoCount}
            clearCompleted={clearCompleted}
            setMode={setListMode}
            all={this.state.all}
            active={this.state.active}
            completed={this.state.completed}
          />
        </section>
      </div>
    );
  }
}

export default TodoApp;
