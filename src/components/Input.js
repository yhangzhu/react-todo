import React, { useState } from "react";

export default function Input({ tasks, addTasks }) {
  const [task, setTasks] = useState("");
  const taskValue = (e) => {
    setTasks(e.target.value);
  };
  const handleTasks = () => {
    addTasks([...tasks, task]);
    setTasks("");
  };
  return (
    <div className="flex justify-center	items-center gap-3	mb-3">
      <input
        type="text"
        value={task}
        onChange={(e) => taskValue(e)}
        className="rounded border-2	 border-gray-500	border-solid	"
        placeholder="Enter task"
        style={{
          outline: "none",
        }}
      />
      <button
        className="border-2	border-neutral-300	px-1	rounded-md text-slate-700	hover:text-amber-400"
        onClick={handleTasks}>
        Add task
      </button>
    </div>
  );
}
