import Task from './Task'
export default function TaskList(props){
    /*
        -TaskList returns a <ul></ul>
        -TaskList gets a list of tasks and for each task returns a <Task/>
        -it gives each task:
            -a number(i) which is used as a key and an array position
            -delOnClick(i) which will delete the task
            -onClick(i) which will register a click on a task
            -tName:  the name of the the task
            -tDesc:  the task description
            -tDone:  the status of the task(true or false)
    */
        return (
            <ul>
                {
                    props.tasks.map((task, i) => 
                    <Task 
                        key={i} 
                        arrPos={i} 
                        delOnClick={() => props.delOnClick(i)} 
                        onClick={() => props.onClick(i)} 
                        tName={task.taskName} 
                        tDesc={task.taskDesc} 
                        tDone={task.completed} 
                    />)
                }
            </ul>
        )
}