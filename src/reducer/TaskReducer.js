import {Task} from './constants/action-types'

const initialState = []

export const taskReducer = (state = initialState, action) =>{

    switch (action.type) {
        case Task.ADD_TASK:
            const id = state.length + 1
            const newState = {...action.payload,id}
            state = [...state,newState]   
            return state         

        case Task.DELETE_TASK:            
            return state.filter( (tk) => tk.id !== action.payload.id )

        case Task.SET_TASK:
            state = action.payload
            return state
        case Task.TOGGLE_REMINDER:
            return state.map( (task) => {
                return task.id === action.payload.id ? {...task,reminder : !task.reminder} : task  
              })        
        default:
            return state
    }

}


