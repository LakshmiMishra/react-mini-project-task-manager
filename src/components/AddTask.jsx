export const AddTask = ({tasklist,setTasklist,task,setTask}) => {
  const handleSubmit=(event)=>{
      event.preventDefault();
    //to edit
 if(task.id){
   const date= new Date();
   const updateTaskList=tasklist.map((todo)=>todo.id==task.id? 
  {id:task.id,name:event.target.task.value,time:date.toLocaleString()} : todo);
  setTasklist(updateTaskList);
  setTask({});

 }
 //to Add new task
 else{
   
    const date=new Date();
    const newtask={id: date.getTime(), name: task.name, time: date.toLocaleString()};
    setTasklist([...tasklist,newtask]);
    setTask({});
 }
  }
  return (
    <section className="addTask">
        <form onSubmit={handleSubmit}>
            <input  type="text" value={task.name|| ""} name="task" autoComplete="off" placeholder="add task" maxLength="25" onChange={e=>setTask({...task,name:e.target.value})} />
            <button type="submit">{task.id?"Update":"Add"}</button>
        </form>
    </section>
  )
}