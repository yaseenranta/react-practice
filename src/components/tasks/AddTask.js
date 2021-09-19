import { useState } from "react"

export const AddTask = ( {onAdd }) => {

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault();
      
        const newTask = {text,day,reminder}

        onAdd(newTask)


        setText('')
        setDay('')
        setReminder(false)

    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label htmlFor='task'>Task</label>
                <input 
                    type="text" 
                    placeholder='Add Task'
                    value={text}
                    onChange={ (e) => setText(e.target.value) }
                    />
            </div>
            <div className='form-control'>
                <label htmlFor='date-time'>Date & time</label>
                <input 
                    type="text" 
                    placeholder='Date & times'
                    value={day}
                    onChange={ (e) => setDay(e.target.value) }
                    />
            </div>
            <div className='form-control form-control-check'>
                <label htmlFor='reminder'>Reminder</label>
                <input 
                    checked={reminder}
                    type="checkbox" 
                    value={text}
                    onChange={ (e) => setReminder(e.currentTarget.checked)}
                    />
            </div>

            <div className='form-control'>
                <button type='buttn' className='btn btn-block'> Add Task</button>
            </div>            
        </form>
    )
}
