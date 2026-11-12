import { useState } from 'react'
import TaskForm from './TaskForm'
import TaskList from './TaskList'
//import './App.css'

function App() {
  const [tasks, setTasks] = useState([
    {
        taskName: "eat lunch",
        taskDesc: "a nice bullet ant sandwich",
        completed: true,
    },
    {
        taskName: "defend self",
        taskDesc: "fart lungs onto attacker",
        completed: false,
    },
    {
        taskName: "mow ceiling",
        taskDesc: "mow  the indoor grass",
        completed: false,
    },
    {
        taskName: "baking",
        taskDesc: "bake some bread",
        completed: false,
    },
    {
        taskName: "get coal",
        taskDesc: "visit the coal mine",
        completed: false,
    },
    {
        taskName: "feign insanity",
        taskDesc: "make loud borking sounds in public",
        completed: false,
    },
    {
        taskName: "perfect hooping",
        taskDesc: "attempt hula hooping with a lead hula hoop",
        completed: false,
    },
    {
        taskName: "swim the dog",
        taskDesc: "put the dog in scuba gear and walk them underwater",
        completed: false,
    },
    {
        taskName: "walk the fish",
        taskDesc: "give the fish SCABA gear and fake legs",
        completed: false,
    },
    {
        taskName: "create hat",
        taskDesc: "make many tin foil hats to keep the aliens away",
        completed: false,
    },
  ])
  //makes a copy of the tasks, swaps the completed status of the task clicked, then saves out the tasks
    function toggleCompletion(i){
        let newTasks = [...tasks];
        newTasks[i].completed = !newTasks[i].completed;
        setTasks(newTasks);
    }
    //makes a copy of the tasks, removes the task being deleted, then saves out the tasks
    function removeElement(i){
        let newTasks = [...tasks];
        newTasks.splice(i,1);
        setTasks(newTasks);
    }

    //prevents reload, takes in the formData, makes a new list of tasks, and adds the formData, saves tasks
    function addTask(e){
        e.preventDefault();
        let formSource = new FormData(e.target);
        let taskList = [...tasks, {taskName:formSource.get("tName"), taskDesc:formSource.get("tDesc"), completed:false}];
        setTasks(taskList);
        e.target.reset();
    }

    //if there are tasks, it uses array function every, checks if all tasks are done
    function checkForCompletion(){
        if(tasks.length>0){
            let allDone = tasks.every(task => task.completed===true);
            if(allDone){
                return `You're all done!`
            }
            return `More to do!`;
        }
        return 'No tasks listed!';
    }

  return (
    <div id="app_home">
      <h1>Get Stuff Done</h1>
      <TaskForm taskAddAction={(e) => addTask(e)}/>
      <p>{checkForCompletion()}</p>
      <TaskList tasks={tasks} delOnClick={(i)=> removeElement(i)} onClick={(i)=> toggleCompletion(i)}/>
    </div>
  )
}

export default App