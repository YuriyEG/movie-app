import React from 'react';
import ReactDOM  from 'react-dom';
import TodoApp from './components/TodoApp.js/TodoApp.js';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <TodoApp/>
    </React.StrictMode>
)
