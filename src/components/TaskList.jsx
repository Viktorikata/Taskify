function TaskList ({tasks, onDelete, onToggle}) {
  if (tasks.length === 0) {
    return <p>Нет задач</p>
  }

  return (
    <ul>
      {tasks.map((t) =>(
        <li key={t.id}>
          <input
            type="checkbox"
            checked={t.completed}
            onChange={()=> onToggle(t.id)}
            />
          <span style={{textDecoration: t.completed ? "line-through" : "none"}}>
            {t.title} - <u>{t.category}</u>
          </span>
          <button 
          onClick={() => onDelete(t.id)}
          >
          ❌
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;