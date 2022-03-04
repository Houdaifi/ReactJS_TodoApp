import Task from "./components/Task";
import TaskForm from "./components/TaskForm";

function App() {
  const AddOrEdit = "Add";

  return (
    <div style={{fontFamily: "Poppins"}} className="flex flex-col bg-gray-100 h-screen p-12">
      <div className="flex items-center justify-center">
        <h1 className="text-3xl font-semibold">React TodoApp</h1>
      </div>
        <TaskForm AddOrEdit={AddOrEdit}/>
        <Task/>
    </div>
  );
}

export default App;
