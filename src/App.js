import React, { useState, useEffect } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

export const Context = React.createContext();

function App() {

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      return JSON.parse(savedTasks);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks])

  return (
    <>
      <header className="task-header">
        <h1>مدیریت زمان BAM</h1>
      </header>
      <Context.Provider value={{ tasks, setTasks }}>
        <AddTask />
        <TaskList />
      </Context.Provider>

    </>
  );
}

export default App;
