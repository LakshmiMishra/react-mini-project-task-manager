import { useState,useEffect } from 'react'
import { Header } from './components/Header'
import './App.css'
import { Footer } from './components/Footer'
import { AddTask } from './components/AddTask'
import { ShowTask } from './components/ShowTask'


function App() {
  const [tasklist,setTasklist]=useState( JSON.parse(localStorage.getItem("tasklist"))||[]);
  const [task,setTask]=useState({});//for edit task

  useEffect(()=>{
 localStorage.setItem("tasklist",JSON.stringify(tasklist));
  },[tasklist])
return(
  <div className="App">
    <Header/>
    <AddTask tasklist={tasklist} setTasklist={setTasklist} task={task} setTask={setTask}/>
    <ShowTask tasklist={tasklist} setTasklist={setTasklist} task={task} setTask={setTask}/>
    <Footer/>
  </div>
    
)

}

export default App
