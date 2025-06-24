import {useState} from "react";
import TaskForm from "./components/TaskForm";
import CategoryFilter from "./components/CategoryFilter";
import StatusFilter from "./components/StatusFilter";
import TaskList from "./components/TaskList"

function App() {
  const [tasks, setTasks] = useState([]);

  // Обработка добавления новой задачи
  const handleAddTask = (newTask) => {
    setTasks ((prev) => [...prev, newTask]);
  };

  // Обработка удаления задачи
  const handleDeleteTask = (idToDelete) => {
    setTasks((prev) => prev.filter((task) => task.id !== idToDelete));
  };

  return (
    <div style={{padding: "20px", maxWidth: "600px", margin: "0 auto"}}>
      <h1>Taskify</h1>
      <TaskForm onAdd={handleAddTask}/>
      <CategoryFilter />
      <StatusFilter />
      <TaskList task={tasks} onDelete={handleDeleteTask}/>
    </div>
  );
}

export default App;