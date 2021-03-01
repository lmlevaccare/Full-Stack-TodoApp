import "./App.css";
import "./index.css";
import { useState, useEffect } from "react";
// import AddTodo from "./components/AddTodo";
// import AddBtn from "./AddBtn";

export default function TodoApp() {


  const [addTask, setaddTask] = useState({ task: "" });

  const [taskArray, setTaskArray] = useState([]);

  const handleName = (event) => {
    const task = event.target.value;

    setaddTask({ ...addTask, task });

    console.log(addTask);
  };

  // creats the object of the task
  const handleSubmit = (event) => {
    event.preventDefault();
    setTaskArray([...taskArray, addTask]);
    setaddTask({ task: "" });
    
  };
  console.log("taskARRAY", taskArray);
  // keeps things in sync fires off when typing into input feild
  useEffect(() => console.log("addTask", addTask));

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Task"
          value={addTask.task}
          onChange={handleName}
        />

        <input type="submit" value="Submit" />

        {taskArray.map((todos) => (
          <h4> Task: {todos.task} </h4>
        ))}
      </form>
    </div>
  );
}
