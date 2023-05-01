import React from "react";
import BotCard from "./BotCard";


const YourBotarmy = ({bots, onrReleaseBot, onDeleteBot, onSelectBot}) => {

    const botCards = 




return (
    <div className="bot-army">
        <h2>Your Bot Army</h2>
        {bots.lenght > 0? botCards: <p>You have no bots enlisted.</p> }
    </div>
)


}


