function StatusFilter ({onStatusChange}) {
  return (
    <div >
      <label htmlFor="status">Статус: </label>
      <select 
      id="status"
      onChange={(e) => onStatusChange(e.target.value)}
      >
        <option value="Все">Все</option>
        <option value="Выполнено">Выполнено</option>
        <option value="Не выполнено">Не выполнено</option>
      </select>
    </div>
  );
}

export default StatusFilter;