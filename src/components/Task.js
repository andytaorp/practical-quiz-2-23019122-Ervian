import React from "react";

/**
 * TODO: implement the Task component
 * @function Task
 * @returns {React.Component} A <li> containing the task description and a checkbox to toggle completion
 */
export default function Task({ task, onToggleTask, onDeleteTask}) {
    const { id, description, finished } = task;
    return (
        <li style={{ textDecoration: finished ? "line-through" : "none" }}>
            <input type="checkbox" checked={finished} onChange={() => onToggleTask(id)} />
            {description}
           <button onClick={() => onDeleteTask(id)} style={{ marginLeft: '1rem', cursor: 'pointer' }}>
             ❌
           </button>
        </li>
    );
}
