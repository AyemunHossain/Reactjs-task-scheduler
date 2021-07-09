import { useState,useEffect } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Addtask from "./components/Addtask";
import Footer from "./components/Footer";
import About from "./components/About";

const App = () => {
    const [tasks, setTask] = useState([])

    useEffect(()=>{
      const getTasks = async () =>{
        const TaskFromServer = await fetchTask()
        setTask(TaskFromServer)
      }
      getTasks()
    }
    ,[])

    //Fetch get all task
    const fetchTask = async ()=>{
      const response = await fetch('http://localhost:5000/tasks')
      const data = await response.json()

      return data
    }

    //Fetch single task
    const fetchATask = async (id)=>{
      const response = await fetch(`http://localhost:5000/tasks/${id}`)
      const data = await response.json()
      return data
    }
    


    //add task button state
    const [showAddTask, setShowAddTask] = useState(false)

    //add task
    const addTask = async(task)=>{
      const id = Math.floor(Math.random() * 100000 + 1)
      const newTask = {id,...task}
      const response = await fetch('http://localhost:5000/tasks',
      {
        method:'POST',
        headers: {
          'content-type': 'application/json'
        },
        body:JSON.stringify(newTask)
      })
      const data = await response.json()

      setTask([...tasks,{...data}])
    }


    //delete task
    const deleteTask = async(id)=>{
      await fetch(`http://localhost:5000/tasks/${id}`,
        {
          method:'DELETE',
      })

      setTask(tasks.filter(
        (tasks)=>tasks.id !== id))
    }
    

    //on toggle update
    const toggleTask = async(id)=>{
      const data = await fetchATask(id)

      const uData = {...data,reminder: !data.reminder}
      const response = await fetch(`http://localhost:5000/tasks/${id}`,
      {
        method: 'PUT',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(uData)
      }
      )
      const resData = await response.json()
      
      setTask(tasks.map((task)=>
      task.id === id? {...task, reminder: resData.reminder}: task  ))
    }

  return (
    <div className="container">
      <Header onClickAdd={()=>setShowAddTask(!showAddTask)} addTaskStatus={showAddTask}/>
      {showAddTask && <Addtask addTask={addTask}/>}
      {tasks.length > 0 ? 
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleTask}/>:
      <h3>Nothing to show</h3>
    }

    <Footer />  
    </div>
  );
}

export default App;
