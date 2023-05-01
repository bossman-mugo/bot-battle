import React from "react";

const FilterBar = ({filters, onFilterClass, onRemoveFilter}) => {

    const classOptions = ["Support", "Medic", "Assault", "Defender", "Captain", "Witch"];

    const handleClassChange = (e) => {
        onFilterClass(e.target.value)
    }

    const handleRemoveClick = (bot_class) => {
        onRemoveFilter(bot_class)
    }

return (
    <div>
        <h3>Classes</h3>
    </div>
)

}


export default FilterBar;