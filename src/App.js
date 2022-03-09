import { useState } from "react";
import Task from "./components/Task";
import TaskForm from "./components/TaskForm";

function App() {
  const [AddOrEdit, setAddOrEdit] = useState("Add");

  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('Tasks')));
  const [task_to_add, setTaskToAdd] = useState("");
  const new_task = {name: task_to_add, completed: false, createdAt: new Date(), color: 'bg-lime-300', setColor: false};

  const form_submit = (event) => {
    event.preventDefault();
    let all_tasks = JSON.parse(localStorage.getItem('Tasks'));
    if(task_to_add === "") return;

    if(AddOrEdit === "Add"){
      if(all_tasks == null) all_tasks = []
      all_tasks.unshift(new_task);
    }else if(AddOrEdit === "Edit"){
      const task_to_edit = JSON.parse(localStorage.getItem('TaskToEdit'));
      let to_edit_task = all_tasks.filter((task) => task.name === task_to_edit[0].task.name);
      to_edit_task[0].name = task_to_add;

      setAddOrEdit('Add')
    }

    localStorage.setItem('Tasks', JSON.stringify([...all_tasks]));
    setTasks([...all_tasks]);
    setTaskToAdd('');
  }

  const setEditTask = () => {
    const task_to_edit = JSON.parse(localStorage.getItem('TaskToEdit'));
    setAddOrEdit("Edit");
    setTaskToAdd(task_to_edit[0].task.name);
  }

  return (
    <div style={{fontFamily: "Poppins"}} className="flex flex-col bg-gray-100 h-screen p-12 w-screen">
      <div className="flex items-center justify-center">
        <h1 className="text-3xl font-semibold">React TodoApp</h1>
      </div>
        <TaskForm AddOrEdit={AddOrEdit} form_submit={form_submit} task_to_add={task_to_add} setTaskToAdd={setTaskToAdd}/>
        <Task tasks={tasks} setTasks={setTasks} setEditTask={setEditTask}/>
    </div>
  );
}

export default App;