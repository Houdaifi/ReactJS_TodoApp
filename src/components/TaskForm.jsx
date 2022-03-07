const AddTask = (props) => {
    
    const AddOrEdit = props.AddOrEdit;
    const form_submit = props.form_submit;
    const task_to_add = props.task_to_add;
    const setTaskToAdd = props.setTaskToAdd;

    return ( 
        <div className="flex items-center justify-center my-12">
            <form className="flex items-center space-x-4 border-2 border-blue-400 rounded p-4" onSubmit={form_submit}>
                <input className="block w-full bg-white text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none"
                                type="text" placeholder="Task..." value={task_to_add} onInput={(event) => setTaskToAdd(event.target.value)}/>
                <button type="submit" className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    {AddOrEdit}
                </button>
            </form>
        </div>
     );
}

export default AddTask;