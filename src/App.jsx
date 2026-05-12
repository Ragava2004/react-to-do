import { useState } from "react";
import Task from "./Task";
function App() {
  const[taskname, settaskname] = useState("");
  const[tasktime, settasktime] = useState("");
  const[tasklist, settasklist] = useState([]);

  const addtask = () => {
    settasklist([...tasklist, {task : taskname, time : tasktime}]);
    taskname('')
    tasktime('')
  }
  return (
    <div className="app">
      <h1>To Do Application</h1>
      <br></br>
      <label>Task name: </label>
      <input type='text' placeholder="what do u want to do?" onChange={(e)=>{
        settaskname(e.target.value);
      }}></input>
      <br></br>
      <br></br>
      <label>Time:</label>
      <input type='text' placeholder="how much time do u take?" onChange={(e)=>{
        settasktime(e.target.value);
      }}></input>
      <br></br>
      <br></br>
      <button onClick={addtask}>Add the task</button>

      {tasklist.map((t)=>{
         return <Task taskname={t.task} tasktime={t.time}/>
      })}
    </div>
  );
}

export default App;