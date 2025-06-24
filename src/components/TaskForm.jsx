import {useState} from "react";

function TaskForm({onAdd}) {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState ("Личное");

    // обработка отправки 
    const handleSubmit = (e) => {
        e.preventDefault();

        if (title.trim() === "") return;

        const newTask = {
            id: Date.now(),
            title,
            category,
            completed: false,
        };

        onAdd(newTask);
        setTitle("");
    };

    return (
        <form onSubmit={handleSubmit} style={{marginBottom: "20px"}}>
            <input
                type="text"
                placeHolder="Новая задача..."  
                value={title}          
                onChange={(e) => setTitle(e.target.value)}
                style={{padding: "8px", width: "60px"}}
                />

                <select
                value={category}
                onChange={(e)=> setCategory(e.target.value)}
                style={{padding:"8px", margin: "10px"}}
                >
                    <option value="Личное"></option>
                    <option value="Работа"></option>
                    <option value="Учёба"></option>
                </select>

                <button type="submit" style={{padding: "8px 12px", marginLeft: "10px"}}>
                    ➕ Добавить
                </button>
        </form>    
        );
}

export default TaskForm;