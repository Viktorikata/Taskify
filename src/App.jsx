import {useState} from "react";
import TaskForm from "./components/TaskForm";
import CategoryFilter from "./components/CategoryFilter";
import StatusFilter from "./components/StatusFilter";
import TaskList from "./components/TaskList"
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("Все");
  const [statusFilter, setStatusFilter] = useState ("Все")

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

  const filteredTasks = tasks
    .filter((task) => 
    categoryFilter === "Все" ? true : task.category === categoryFilter
  )
  .filter((task) => 
    statusFilter === "Все"
    ? true
    : statusFilter === "Выполнено"
    ? task.completed 
    : !task.completed
  );

  const handleStatusChange = (status) => {
    setStatusFilter(status);
  };

  const handleToggleComplete = (idToToggle) => {
    setTasks((prev) =>
      prev.map((task)=>
        task.id === idToToggle ? {...task, completed: !task.completed} : task
      )
    )
  };

  return (
    <div className="container">
      <h1>Taskify</h1>
      <TaskForm onAdd={handleAddTask}/>
      <CategoryFilter onCategoryChange={handleCategoryChange} />
      <StatusFilter onStatusChange={handleStatusChange} />
      <TaskList 
        tasks={filteredTasks} 
        onDelete={handleDeleteTask}
        onToggle={handleToggleComplete}
        />
    </div>
  );
}

export default App;