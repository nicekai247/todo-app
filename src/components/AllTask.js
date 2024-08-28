import React from "react";

export default function AllTask({ allTasks, handleDelete }) {
  return (
    <ul>
      {allTasks.map((task) => (
        <li key={task.id}>
          <div className="title">
            <h2>{task.title}</h2>
            <button
              onClick={() => handleDelete(task.id)}
              className="close-button"
            >
              X
            </button>
          </div>
          {!task.description ? null : <p>{task.description}</p>}
        </li>
      ))}
    </ul>
  );
}
