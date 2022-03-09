import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faClipboardCheck, faTrash, faPalette, faGripLines, faCheck } from '@fortawesome/free-solid-svg-icons';
import { OrderGroup, OrderItem, arrayMove } from 'react-draggable-order';

const Task = (props) => {
    
    const tasks = props.tasks;
    const setTasks = props.setTasks;
    const setEditTask = props.setEditTask;

    const colors = ['bg-red-200', 'bg-orange-300', 'bg-amber-300', 'bg-yellow-300', 'bg-lime-300', 'bg-green-300', 'bg-emerald-300', 'bg-teal-300', 'bg-violet-300'];

    const all_tasks = JSON.parse(localStorage.getItem('Tasks'));

    function setItem_in_local_storage_and_render_tasks(item){
        localStorage.setItem('Tasks', JSON.stringify([...item]));
        setTasks([...item]);
    }

    function ToggleCompleted(task_index){
        tasks[task_index].completed = !tasks[task_index].completed;
        setItem_in_local_storage_and_render_tasks(tasks);
    }

    function EditTask(task_index){
        localStorage.setItem('TaskToEdit', JSON.stringify([{ index: task_index, task: all_tasks[task_index] }]));
        setEditTask();
    }

    function ShowColors(index){
        tasks.forEach((task, task_index) => {
            if(task_index === index){
                task.setColor = !task.setColor;
            }else{
                task.setColor = false;
            }
        });
        setItem_in_local_storage_and_render_tasks(tasks);
    }

    function ChangeColor(index, color){
        tasks[index].color = color;
        setItem_in_local_storage_and_render_tasks(tasks);
    }

    function DeleteTask(task_index){
        tasks.splice(task_index, 1);
        setItem_in_local_storage_and_render_tasks(tasks);
    }

    function Toggle_Tasks(boolean){
        if (typeof boolean !== "boolean"){
            setTasks([...all_tasks]);
        }else{
            setTasks([...all_tasks.filter((task) => task.completed === boolean)]);
        }   
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <div className='flex flex-col md:flex-row justify-center items-center pb-8 relative'>
                <div>
                    <button onClick={() => Toggle_Tasks('')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 border rounded-l-md">
                        ALL
                    </button>
                    <button onClick={() => Toggle_Tasks(true)} className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 border">
                        Completed
                    </button>
                    <button onClick={() => Toggle_Tasks(false)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border rounded-r-md">
                        Uncompleted
                    </button>
                </div>
            </div>
            <div className="flex flex-col w-full md:w-1/2 space-y-3 max-h-96 overflow-y-auto ">
                <OrderGroup>
                    {tasks && tasks.map((task, index) => { 
                        return (
                            <OrderItem key={index} index={index} onMove={(to) => setItem_in_local_storage_and_render_tasks(arrayMove(tasks, index, to))}>
                                <div className={`flex justify-between items-center border p-6 shadow ${task.color}`} key={index}>
                                    <OrderItem.Handle>
                                        <div>
                                            <button className="text-red-500">
                                                <FontAwesomeIcon icon={faGripLines} />
                                            </button>
                                        </div>
                                    </OrderItem.Handle>
                                    <div className={task.completed ? 'line-through': null} >{task.name}</div>
                                    <div className="flex space-x-8">
                                        <button className="text-emerald-500" onClick={() => ToggleCompleted(index)}>
                                            <FontAwesomeIcon icon={faClipboardCheck} />
                                        </button>
                                        <button className="text-blue-500" onClick={() => EditTask(index)}>
                                            <FontAwesomeIcon icon={faEdit} />
                                        </button>
                                        <button className="text-slate-500" onClick={() => ShowColors(index)}>
                                            <FontAwesomeIcon icon={faPalette} />
                                            { task.setColor === true && <div className='grid grid-cols-3 grid-rows-3 gap-2 shadow rounded bg-gray-50 p-2 absolute w-44 right-80 mr-6 mb-24'>
                                                {colors && colors.map((color, key) => {
                                                    return (
                                                        <div key={key} className={`px-4 py-2 flex justify-center items-center ${color}`} onClick={() => ChangeColor(index, color)}>
                                                            {color === task.color && <FontAwesomeIcon icon={faCheck} />}
                                                        </div>
                                                    )
                                                })}
                                            </div>}
                                        </button>
                                        <button className="text-red-500" onClick={() => DeleteTask(index)}>
                                            <FontAwesomeIcon icon={faTrash} />
                                        </button>
                                    </div>
                                </div>
                            </OrderItem>
                        );
                    }
                )}
                </OrderGroup>
            </div>
        </div>
     );
}

export default Task;