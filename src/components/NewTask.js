import React from "react";

export default function NewTask({ handleSubmit, handleChange, task }) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        value={task.title || ""}
        placeholder="task..."
        onChange={handleChange}
      />

      {!task.title ? null : (
        <>
          <textarea
            name="description"
            value={task.description || ""}
            placeholder="details"
            onChange={handleChange}
          />
        </>
      )}
      <button type="submit">add</button>
    </form>
  );
}
