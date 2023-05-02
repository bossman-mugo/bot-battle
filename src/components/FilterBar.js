import React from "react";


// component filetbar that takes in props such as filters, onfilterClass and onRemoveFilter
const FilterBar = ({filters, onFilterClass, onRemoveFilter}) => {

    const classOptions = ["Support", "Medic", "Assault", "Defender", "Captain", "Witch"];

    
    const handleClassChange = (e) => {
        onFilterClass(e.target.value)
    }

    const handleRemoveClick = (bot_class) => {
        onRemoveFilter(bot_class)
    }

    const filterButtons = classOptions.map((option) => {
        if (filters.includes(option)) {
            return <button key ={option} className="selected" onClick={() => handleRemoveClick(option)}>{option}</button>

        }else{
            return <button key={option} onClick={() => handleClassChange({target: {value: option}})}>{option}</button>
        }
    })

return (
    <div>
        <h3>Classes</h3>
    </div>
)

}


export default FilterBar;