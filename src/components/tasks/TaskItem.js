import { FaTimes} from 'react-icons/fa'

export const TaskItem = ({task, deleteTask, onToggle}) => {
    return (
        <div className={`task ${task.reminder ? 'reminder': ''}`} onDoubleClick={ () => onToggle(task.id)}>
            <h3>
                {task.text}
                <FaTimes style={{ color : 'red'}} onClick={() => deleteTask(task.id)}></FaTimes>
            </h3>
            <p>{task.day}</p>
        </div>
    )
}
