function StatusFilter ({onStatusChange}) {
  return (
    <div style={{marginBottom: "20px"}}>
      <label htmlFor="status">Статус: </label>
      <select 
      id="status"
      onChange={(e) => onStatusChange(e.target.value)}
      style={{padding: "8px", marginLeft: "10px"}}
      >
        <option value="Все">Все</option>
        <option value="Выполнено">Выполнено</option>
        <option value="Не выполнено">Не выполнено</option>
      </select>
    </div>
  );
}

export default StatusFilter;