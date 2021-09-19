import Header from "./components/Header";
import { useState, useEffect } from "react";
import { Tasks } from "./components/tasks/Tasks";
import { AddTask } from "./components/tasks/AddTask";
import { useApi} from "./hooks/useApi"


function App() {

  const [tasks,setTasks] = useState([])
  const [showAddTask,setShowAddTask] = useState(false)
  const {data} = useApi('http://localhost:5000/tasks','GET')

  useEffect( () => {
    setTasks(data)
  },[data])

  useEffect( () => {
    
  })

  const PostTask = (task) => {

    const {data} = useApi('http://localhost:5000/tasks','POST',task)

    return data
  }

  const SaveTask = (task) => {

    const newTask = PostTask(task)
    setTasks([...tasks,newTask])

  }

  const deleteTask = (id) => {
    setTasks(tasks.filter( (task) => task.id !== id )) 
  }

  const OnToggleReminder = (id) => {
    setTasks(tasks.map( (task) => {
        return task.id === id ? {...task,reminder : !task.reminder} : task  
      }
    ))
  }

  return (
    <div className="container">
        <Header 
            title='Task tracker' 
            showAddForm = { () => setShowAddTask(!showAddTask) } 
            showAddTask = {showAddTask} />
        {showAddTask && <AddTask onAdd={SaveTask}></AddTask>}
        {
          tasks.length > 0 ? <Tasks 
                tasks={tasks} 
                deleteTask={deleteTask} 
                onToggle={OnToggleReminder} 
                ></Tasks> : 'No Tasks to show'
        }
        
    </div>
  );
}

export default App;
