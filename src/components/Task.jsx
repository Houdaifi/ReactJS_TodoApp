import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Task = () => {
    
    let tasks = JSON.parse(localStorage.getItem('Tasks'));
    
    return (
        <div className="flex flex-col space-y-3">
            
            {tasks && tasks.map((task, index) => (
                <div className="flex justify-between items-center border bg-white p-4" key={index}>
                    <div className="font-semibold">{task.name}</div>
                    <div className="flex space-x-2">
                        <button>
                            <FontAwesomeIcon icon={faCoffee} />
                        </button>
                    </div>
                </div>
            ))}

        </div>
     );
}

export default Task;