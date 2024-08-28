import React, { useState } from "react";
import NewTask from "./NewTask";
import AllTask from "./AllTask";
import "./styles/Todo.css";

export default function Todo() {
  //set state
  const [task, setTask] = useState({});
  const [allTasks, setAllTasks] = useState([]);
  // handle event
  const handleChange = (event) => {
    const { name, value } = event.target;

    setTask((prev) => {
      return {
        ...prev,
        id: Date.now(),
        [name]: value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!task.title) return;

    setAllTasks((prev) => [...prev, task]);

    setTask({});
  };

  const handleDelete = (removeTaskId) => {
    setAllTasks((prev) => prev.filter((task) => task.id !== removeTaskId));
  };

  return (
    <main>
      <h1>Tasks</h1>
      <NewTask
        task={task}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <AllTask allTasks={allTasks} handleDelete={handleDelete} />
    </main>
  );
}
