import { useState } from "react"

const Addtask = (props) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)
    
    const onSubmit =(e)=>{
        e.preventDefault()

        if(!text){
            alert('Please add a task')
            return
        }
        props.addTask({text, day, reminder})

        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
            <label>Task</label>
            <input type='text' placeholder="Add task" value={text} 
             onChange={(e)=>setText(e.target.value)}></input>
            </div>

            <div className="form-control">
            <label>Day & Time</label>
            <input type='text' placeholder="Add Day & Time" value={day} 
             onChange={(e)=>setDay(e.target.value)}></input>
            </div>

            <div className="form-control
            form-control-check">
            <label>Reminder</label>
            <input type='checkbox' value={reminder} checked={reminder}
             onChange={(e)=>setReminder(e.currentTarget.checked)}></input>
            </div>
            <input className="btn btn-block" type="submit" value="Save Task"></input>
        </form>
    )
}

export default Addtask
