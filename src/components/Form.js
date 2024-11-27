import React, { useState } from "react";

export default function Form({ onAddTask }) {
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
      e.preventDefault();
      const newTask = { id: Date.now(), description, finished: false };
      onAddTask(newTask);
      setDescription("");
  
    // TODO: write code to handle form submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Task</h3>
    <input
    type="text"
    placeholder="Add a task"
    value={description}
    onChange={(e) => setDescription(e.target.value)}
    />
    <button type="submit">Add Task</button>
    </form>
    /*TODO: add a form to add a new task*/
  )
  };

