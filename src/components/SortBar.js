import React from "react";



const SortBar = ({sortOption, onSortOptionChange}) => {
    
    return (
        <div>
            <label htmlFor="sort-se;ect">Sort Bots By: </label>
            <select id="sort-select" value={sortOption} onChange={handleChange}>
                <option value="health">Health</option>
                <option value="damage">Damage</option>
                <option value="armor">Armor</option>
            </select>
        </div>
    )
}

export default SortBar;