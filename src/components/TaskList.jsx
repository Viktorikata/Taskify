function TaskList ({tasks}) {
  if (tasks.length === 0) {
    return <p>Нет задач</p>
  }

  return (
    <ul>
      {tasks.map((t) =>(
        <li key={t.id}>
          {t.title} - <em>{t.category}</em>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;