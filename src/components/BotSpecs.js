import React from "react";
import BotCard from "./BotCard";


const BotSpecs = ({bot, onBackToCollection, onEnlistBot}) => {

    return (
        <div classname="bot-specs">
            <BotCard bot={bot} onSelect={null} />
            <button onClick={() => onEnlistBot(bot)}>Enlist Bot</button>
            <button onClick={onBackToCollection}>Back to Collection</button>
        </div>
    )
}


export default BotSpecs;