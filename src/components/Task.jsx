import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faClipboardCheck, faTrash, faPalette, faGripLines } from '@fortawesome/free-solid-svg-icons';
import { OrderGroup, OrderItem, arrayMove } from 'react-draggable-order';

const Task = (props) => {
    
    const tasks = props.tasks;
    const setTasks = props.setTasks;

    function setItem_in_local_storage_and_render_tasks(item){
        localStorage.setItem('Tasks', JSON.stringify([...item]));
        setTasks([...item]);
    }

    function ToggleCompleted(task_index){
        tasks[task_index].completed = !tasks[task_index].completed;
        setItem_in_local_storage_and_render_tasks(tasks);
    }

    function DeleteTask(task_index){
        tasks.splice(task_index, 1);
        setItem_in_local_storage_and_render_tasks(tasks);
    }

    return (
        <div className="flex flex-col justify-center items-center max-h-96 overflow-y-auto">
            <div className="flex flex-col md:w-1/2 space-y-3">
                <OrderGroup>
                    {tasks && tasks.map((task, index) => { 
                        return (
                            <OrderItem key={index} index={index} onMove={(to) => setItem_in_local_storage_and_render_tasks(arrayMove(tasks, index, to))}>
                                <div className="flex justify-between items-center bg-white hover:bg-gray-50 border p-6 shadow" key={index}>
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
                                        <button className="text-blue-500">
                                            <FontAwesomeIcon icon={faEdit} />
                                        </button>
                                        <button className="text-slate-500">
                                            <FontAwesomeIcon icon={faPalette} />
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