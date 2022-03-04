import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faClipboardCheck, faTrash, faPalette } from '@fortawesome/free-solid-svg-icons';
import { Draggable } from "react-drag-reorder";

const Task = () => {
    
    let [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('Tasks')));

    function getChangedPos (currentPos, newPos) {
        console.log(currentPos, newPos);
    };

    function ToggleCompleted(task_index){
        console.log(tasks)

        tasks[task_index].completed = !tasks[task_index].completed;
        localStorage.setItem('Tasks', JSON.stringify(tasks));

        setTasks(tasks);
    }
    
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col w-1/2 space-y-3">
                {tasks && <Draggable onPosChange={() => getChangedPos}>
                    {tasks.map((task, index) => (
                        <div className="flex justify-between items-center bg-white hover:bg-gray-50 border p-6" key={index}>
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
                                <button className="text-red-500">
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                            </div>
                        </div>
                    ))}
                </Draggable>}
            </div>
        </div>
     );
}

export default Task;