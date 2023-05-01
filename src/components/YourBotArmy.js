import React from "react";
import BotCard from "./BotCard";


const YourBotArmy = ({bots, onrReleaseBot, onDeleteBot, onSelectBot}) => {

    const botCards = bots.map(bot => <BotCard key={bot.id} bot={bot} buttonText="Release Bot" onClick={() => onrReleaseBot(bot)} onDelete={() => onDeleteBot(bot)} onSelect={() => onSelectBot(bot)} />)




return (
    <div className="bot-army">
        <h2>Your Bot Army</h2>
        {bots.lenght > 0? botCards: <p>You have no bots enlisted.</p> }
    </div>
)


}

export default YourBotArmy;


