function CategoryFilter ({onCategoryChange}) {
    return (
        <div >
            <label htmlFor="category">Категория: </label>
            <select
            id="category"
            onChange={(e)=> onCategoryChange(e.target.value)}
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