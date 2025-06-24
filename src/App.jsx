import {useState} from "react";
import TaskForm from "./components/TaskForm";
import CategoryFilter from "./components/CategoryFilter";
import StatusFilter from "./components/StatusFilter";
import TaskList from "./components/TaskList"

function App() {
  const [tasks, setTasks] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("Все");

  // Обработка добавления новой задачи
  const handleAddTask = (newTask) => {
    setTasks ((prev) => [...prev, newTask]);
  };

  // Обработка удаления задачи
  const handleDeleteTask = (idToDelete) => {
    setTasks((prev) => prev.filter((task) => task.id !== idToDelete));
  };

  const handleCategoryChange = (category) => {
    setCategoryFilter(category);
  };

  const filteredTasks = categoryFilter === "Все"
  ? tasks
  : tasks.filter((task) => task.category === categoryFilter);

  return (
    <div style={{padding: "20px", maxWidth: "600px", margin: "0 auto"}}>
      <h1>Taskify</h1>
      <TaskForm onAdd={handleAddTask}/>
      <CategoryFilter />
      <StatusFilter />
      <TaskList tasks={filteredTasks} onDelete={handleDeleteTask}/>
    </div>
  );
}

export default App;