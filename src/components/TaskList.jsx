function TaskList ({tasks, onDelete}) {
  if (tasks.length === 0) {
    return <p>Нет задач</p>
  }

  return (
    <ul>
      {tasks.map((t) =>(
        <li key={t.id}>
          {t.title} - <em>{t.category}</em>
          <button 
          onClick={() => onDelete(t.id)}
          style={{marginLeft: "10px"}}>
          ❌
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;