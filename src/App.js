import React, { useState } from "react";
import Input from "./components/Input";
import Task from "./components/Task";
export default function App() {
  const [tasks, setTasks] = useState([]);
  const renderedTasks = tasks.map((title, index) => {
    return <Task key={index} title={title} index={index + 1}/>;
  });
  console.log(tasks);
  return (
    <main className="bg-sky-200	min-h-screen	grid grid-cols-1	place-items-center		">
      <div className="max-w-sm	 capitalize	">
        <header className="mb-2.5">
          <h2 className="text-gray-600 font-semibold font-sans 	text-2xl		">
            Tasks list
          </h2>
        </header>
        <Input addTasks={setTasks} tasks={tasks}></Input>
        {renderedTasks}
      </div>
    </main>
  );
}
