import React, { useState } from "react";
import Form from "./Form";
import TaskList from "./TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
    // TODO: write code to add a new task
  };

  const handleToggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, finished: !task.finished } : task
      )
    );
    // TODO: write code to toggle a task's status
  };

  const handleDeleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    // TODO: write code to delete a task
  };

  return (
    <div className="app">
      <h1>Task Tracker</h1>
      <Form onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onToggleTask={handleToggleTask} onDeleteTask={handleDeleteTask} />
      {/*TODO: add a form to add a new task*/}
      {/*TODO: add a list of tasks*/}
    </div>
  );
}

export default App;
