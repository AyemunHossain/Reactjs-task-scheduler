
import Task from "./Task"

const Tasks = (props) => {
    return (
        <>
            {props.tasks.map((task,index)=>( 
                <Task index = {index }task={task} onDelete={props.onDelete} onToggle={props.onToggle}/>
            ))}
        </>
    )
}

export default Tasks