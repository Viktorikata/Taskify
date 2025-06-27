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
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Новая задача ..."  
                value={title}          
                onChange={(e) => setTitle(e.target.value)}
                />

                <select
                value={category}
                onChange={(e)=> setCategory(e.target.value)}                
                >
                    <option value="Личное">Личное</option>
                    <option value="Работа">Работа</option>
                    <option value="Учёба">Учёба</option>
                </select>

                <button type="submit" >
                    Добавить
                </button>
        </form>    
        );
}

export default TaskForm;