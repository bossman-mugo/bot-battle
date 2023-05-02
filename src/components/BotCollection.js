import React from "react";
import BotCard from "./BotCard";//import the BotCard component from BotCard


//component that takes in props such as bots
const BotCollection = ({bots, onEnlistBot, onSelectBot}) => {

     //create an array of bot components as it maps every bot in the bots prop
    // the bot prop represents the current bot
    
    const botCards = bots.map(bot => <BotCard key={bot.id} bot={bot} buttonText="Enlist Bot" onClick={() => onEnlistBot(bot)} onSelect={() => onSelectBot(bot)}/>)


    // return div that renders conditionally 
    return (
        <div className="bot-collection">
            <h2>
                Bots Available for Enlisting
            </h2>
            {bots.length = 0? botCards : <p> No bots available. </p>}
        </div>
    )



}

export default BotCollection;