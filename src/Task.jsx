export default function Task(props){
    /*
        Task is a functional component
        -it has a checkbox which responds to onClick by calling props.onClick, it has a checked status of props.tDone
        -it has a button which responds to props.delOnClick
    */
    return (
        <li>
            <input type="checkbox" onChange={props.onClick} checked={props.tDone}/>
            {props.tName}: {props.tDesc}
            &nbsp;<button onClick={props.delOnClick}>Delete Task</button>
        </li>
    )
}