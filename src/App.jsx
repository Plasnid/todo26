import { useState, useEffect } from 'react'
import TaskForm from './TaskForm'
import TaskList from './TaskList'
//import './App.css'

function App(){
  const [data, setData] = useState(null);
  const [dataLoaded, setDataLoaded] = useState(false);

  function addTask(e){
    e.preventDefault();
    let formSource = new FormData(e.target);
    let taskList = [...data, {taskName:formSource.get("tName"), taskDesc:formSource.get("tDesc"), completed:false}];
    setData(taskList);
    e.target.reset();
}

  function checkForCompletion(){
    if(data.length>0){
        let allDone = data.every(task => task.completed===true);
        if(allDone){
            return `You're all done!`
        }
        return `More to do!`;
    }
    return 'No tasks listed!';
}
  //makes a copy of the tasks, swaps the completed status of the task clicked, then saves out the tasks
  function toggleCompletion(i){
    console.log("about to toggle");
    let newTasks = [...data];
    console.log(newTasks);
    newTasks[i].completed = !newTasks[i].completed;
    console.log(newTasks[i]);
    console.log(newTasks);
    setData(newTasks);
  };
  function removeElement(i){
    let newTasks = [...data];
    newTasks.splice(i,1);
    setData(newTasks);
}

  const fetchTaskList = async () => {
    try {
      let response = await fetch('./tasks.json');
      let json = await response.json();
      return { success: true, data: json };
    } catch (error) {
      console.log(error);
      return { success: false };
    }
  } 
  useEffect(() => {
    (async () => {
      setDataLoaded(false);
      let res = await fetchTaskList();
      if (res.success) {
        console.log(res.data.tasks);
        setData(res.data.tasks);
        setDataLoaded(true);
        console.log(dataLoaded);
      }
    })();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      {dataLoaded ?(
        <div id="app_home">
          <h1>Get Stuff Done</h1>
          <TaskForm taskAddAction={(e) => addTask(e)}/>
          <p>{checkForCompletion()}</p>
          <TaskList  tasks={data} delOnClick={(i)=> removeElement(i)} onClick={(i)=> toggleCompletion(i)}/>
        </div>
      ):(
        <p>no Data yet</p>
      )}
    </>
  );
}
export default App;