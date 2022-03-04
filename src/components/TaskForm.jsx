import { useEffect, useState } from "react";

const AddTask = (props) => {
    
    const AddOrEdit = props.AddOrEdit;
    const task = {name: 'Heeelo', completed: false, createdAt: new Date()};
    
    function handleSubmit(event) {
        if(task.name == "") return; 

        var tasks = [];

        JSON.parse(localStorage.getItem('Tasks')).forEach(task => {tasks.push(task)});

        tasks.push(task);

        localStorage.setItem('Tasks', JSON.stringify(tasks));
        console.log(JSON.parse(localStorage.getItem('Tasks')));
        event.preventDefault();
    }

    useEffect(() => {
        localStorage.clear();
        localStorage.setItem('Tasks', JSON.stringify([task]));
    });

    return ( 
        <div className="my-12">
            <form className="flex items-center space-x-4 border-2 border-blue-300 rounded p-4" onSubmit={handleSubmit}>
                <input className="block w-full bg-white text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none"
                                type="text" placeholder="Task..." onInput={(event) => task.name = event.target.value}/>
                <button type="submit" className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    {AddOrEdit}
                </button>
            </form>
        </div>
     );
}

export default AddTask;