import { useState } from "react";
import Task from "./components/Task";
import TaskForm from "./components/TaskForm";

function App() {
  const AddOrEdit = "Add";

  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('Tasks')));
  const [task_to_add, setTaskToAdd] = useState("");
  const new_task = {name: task_to_add, completed: false, createdAt: new Date()};

  const form_submit = (event) => {
    event.preventDefault();
    if(task_to_add === "") return;

    const all_tasks = JSON.parse(localStorage.getItem('Tasks'));
    JSON.parse(localStorage.getItem('Tasks')).unshift(new_task);
    localStorage.setItem('Tasks', JSON.stringify([...all_tasks]));
    setTasks([...all_tasks]);
    setTaskToAdd('');
  }

  return (
    <div style={{fontFamily: "Poppins"}} className="flex flex-col bg-gray-100 h-screen p-12 w-screen">
      <div className="flex items-center justify-center">
        <h1 className="text-3xl font-semibold">React TodoApp</h1>
      </div>
        <TaskForm AddOrEdit={AddOrEdit} form_submit={form_submit} task_to_add={task_to_add} setTaskToAdd={setTaskToAdd}/>
        <Task tasks={tasks} setTasks={setTasks}/>
    </div>
  );
}

export default App;