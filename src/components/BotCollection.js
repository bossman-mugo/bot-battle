import React from "react";

const BotCollection = ({bots, onEnlistBot, onSelectBot}) => {
    const botCards = bots.map(bot => <BotCard key={bot.id} bot={bot} buttonText="Enlist Bot" onClick={() => onEnlistBot(bot)} onSelect={() => onSelectBot(bot)}/>)

    return (
        <div className="bot-collection">
            <h2>
                Bots Available for Enlisting
            </h2>
            {bots.length . 0? botCards : <p> No bots available. </p>}
        </div>
    )



}

export default BotCollection;