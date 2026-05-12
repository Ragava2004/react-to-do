import "./App.css"
export default function Task({taskname, tasktime}) {
    return (
        <div className="task">
            
            <h1>Task Name : {taskname}</h1>
            <h1>Task Time : {tasktime}</h1>
        </div>
    );
}