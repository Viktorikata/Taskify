function CategoryFilter ({onCategoryChange}) {
    return (
        <div style={{marginBottom: "20px"}}>
            <label htmlFor="category">Категория: </label>
            <select
            id="category"
            onChange={(e)=> onCategoryChange(e.target.value)}
            style={{padding:"8px", marginLeft:"10px"}}
            >
                <option value="Все">Все</option>
                <option value="Личное">Личное</option>
                <option value="Работа">Работа</option>
                <option value="Учёба">Учёба</option>
            </select>
        </div>
    );
}

export default CategoryFilter;