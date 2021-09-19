import { useState, useEffect } from "react";
import { useSelector, useDispatch, connect} from 'react-redux'
import { useApi} from "./hooks/useApi"
import { setTasks, removeTask, addTask, onToggleReminder} from './reducer/actions/tasks'

import  Header  from "./components/Header";
import { Tasks } from "./components/tasks/Tasks";
import { AddTask } from "./components/tasks/AddTask";

function App(props) {

  const dispatch = useDispatch()
  const tasks = useSelector(state => state.task)
  const [showAddTask,setShowAddTask] = useState(false)
  const {data} = useApi('http://localhost:5000/tasks','GET')

  useEffect( () => {
    dispatch(setTasks(data))
  },[data])

  return (
    <div className="container">
        <Header 
            title='Task tracker' 
            showAddForm = { () => setShowAddTask(!showAddTask) } 
            showAddTask = {showAddTask} />
        {showAddTask && <AddTask onAdd={props.addTask}></AddTask>}
        {
          tasks.length > 0 ? <Tasks 
                tasks={tasks} 
                deleteTask={props.removeTask} 
                onToggle={props.onToggleReminder} 
                ></Tasks> : 'No Tasks to show'
        }
        
    </div>
  );
}

const actionCreator = { 
  removeTask,
  addTask,
  onToggleReminder
 }
 
export default connect(null,actionCreator )(App)