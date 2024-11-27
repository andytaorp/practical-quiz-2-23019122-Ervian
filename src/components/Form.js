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
    <input
    type="text"
    placeholder= "New Task"
    value={description}
    onChange={(e) => setDescription(e.target.value)}
    />
    <button type="submit">Add Task</button>
    </form>
    /*TODO: add a form to add a new task*/
  )
  };

