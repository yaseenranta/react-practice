import {Task} from '../constants/action-types'

export const setTasks = (tasks) => {
    console.log('from Set Tasks')
    return {
        type : Task.SET_TASK,
        payload : tasks
    }
}

export const addTask = (task) => {
    return {
        type : Task.ADD_TASK,
        payload : task        
    }
}


export const removeTask = (id) => {
    console.log('remove task')
   return {
       type : Task.DELETE_TASK,
       payload : {
           id : id
       }
   }
}

export const onToggleReminder = (id) => {

    console.log('toggle reminder')
    return {
        type : Task.TOGGLE_REMINDER,
        payload : {
            id : id
        }
    }
}


