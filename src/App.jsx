import {useState} from "react";
import TaskForm from "./components/TaskForm";
import CategoryFilter from "./components/CategoryFilter";
import StatusFilter from "./components/StatusFilter";
import TaskList from "./components/TaskList"

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks ((prev) => [...prev, newTask]);
  };

  return (
    <div style={{padding: "20px", maxWidth: "600px", margin: "0 auto"}}>
      <h1>Taskify</h1>
      <TaskForm onAdd={handleAddTask}/>
      <CategoryFilter />
      <StatusFilter />
      <TaskList task={tasks} />
    </div>
  );
}

export default App;