import { useEffect, useState } from "react";
import Task from "./components/Task";
import TaskForm from "./components/TaskForm";

function App() {
  const AddOrEdit = "Add";

  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('Tasks')));

  const new_task = {name: '', completed: false, createdAt: new Date()};

  const form_submit = (event) => {
    event.preventDefault();

    if(new_task.name === "") return;

    tasks.unshift(new_task);
    setTasks([...tasks]);
  }

  return (
    <div style={{fontFamily: "Poppins"}} className="flex flex-col bg-gray-100 h-screen p-12">
      <div className="flex items-center justify-center">
        <h1 className="text-3xl font-semibold">React TodoApp</h1>
      </div>
        <TaskForm AddOrEdit={AddOrEdit} form_submit={form_submit} new_task={new_task}/>
        <Task tasks={tasks} setTasks={setTasks}/>
    </div>
  );
}

export default App;