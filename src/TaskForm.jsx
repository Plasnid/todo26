export default function TaskForm(props){
  //below we have the form, with props.taskAddAction as our submit action
    return(
        <form onSubmit={props.taskAddAction}>
            <h2>Add a Task</h2>
            <fieldset>
                <label htmlFor="tName">Task Name:</label>
                &nbsp;<input id="tName" name="tName" type="text" required />
            </fieldset>
            <fieldset>
                <label htmlFor="tDesc">Task Description:</label>
                &nbsp;<input id="tDesc" name="tDesc" type="text" required />
            </fieldset>
            <input type="submit" />
        </form>
    )
}