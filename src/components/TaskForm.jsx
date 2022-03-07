import { useEffect } from "react";

const AddTask = (props) => {
    
    const AddOrEdit = props.AddOrEdit;
    const form_submit = props.form_submit;
    const new_task = props.new_task;
    const task = [{name: 'Fix add new task form', completed: false, createdAt: new Date()}, {name: 'Add drag tasks', completed: true, createdAt: new Date()}];
    
    useEffect(() => {
        localStorage.clear();
        localStorage.setItem('Tasks', JSON.stringify(task));
    });

    return ( 
        <div className="flex items-center justify-center my-12">
            <form className="flex items-center space-x-4 border-2 border-blue-400 rounded p-4" onSubmit={form_submit}>
                <input className="block w-full bg-white text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none"
                                type="text" placeholder="Task..." onInput={(event) => new_task.name = event.target.value}/>
                <button type="submit" className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    {AddOrEdit}
                </button>
            </form>
        </div>
     );
}

export default AddTask;