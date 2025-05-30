"use client";
import React, { useState } from "react";

interface Task {
  text: string;
  completed: boolean;
}

const TodoList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask("");
  };

  const handleToggleTask = (index: number) => {
    const updatedTasks = [...tasks];

    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const handleDeleteTasks = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);

    setTasks(updatedTasks);
  };

  return (
    <div className="text-black">
      <h1 className="max-w-md mx-auto p-4 bg-green-100 rounded-xl space-y-4 text-2xl font-bold">
        To-Do List
      </h1>{" "}
      <br />
      <div className="flex space-x-2">
        <input
          className="flex-1 p-2 border-gray-300 rounded"
          placeholder="Add a new task"
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={(e) => e.key === "enter" && handleAddTask()}
        />
        <button
          className="bg-blue-400 text-white px-4 py-2 hover:bg-blue-600 rounded-xl"
          onClick={handleAddTask}
        >
          Add
        </button>
      </div>{" "}
      <br />
      <ul className="space-y-2">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`flex justify-between items-center p-2 rounded-xl ${
              task.completed ? "bg-green-200" : "bg-gray-300"
            }`}
          >
            <span
              className={`flex-1 cursor-pointer ${
                task.completed ? "line-through text-gray-600" : ""
              }`}
              onClick={() => handleToggleTask(index)}
            >
              {task.text}
            </span>
            <button
              className="text-blue-800 hover:text-blue-900 bg-blue-100 rounded p-2"
              onClick={() => handleDeleteTasks(index)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
