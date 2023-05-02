import React from "react";


//Define a component called BotCard
//BotCard takes in props which are destructured
const BotCard = ({bot, buttonText, onClick, onSelect, onDelete}) => {
    //destructured the bot further
    const {id, name, health, damage, armor, bot_class, catchphrase, avatar_url} = bot;

    return (
        //div element contains a top and bottom section ===>  (TOP)
        <div className="bot_card">
            <div className="card-top" onClick={onSelect}>
                {/*Display an image with the bots avatar_url*/}
                <img src={avatar_url} alt={name} />

                {/*display the bots name*/}
                <h3>{name}</h3>

                {/*display the bots catchphrase*/}
                <p>"{catchphrase}"</p>
            </div>
            <div className="card-bottom">
                {/*Display a stats div element displaying the bots health,damage and armor*/}
                <div className="stats">
                    <span><strong>Health:</strong> {health} </span>
                    <span><strong>Damage:</strong> {damage} </span>
                    <span><strong>Armor:</strong> {armor} </span>
                </div>
                <button onClick={onClick}>{buttonText}</button>
                {onDelete && <button className="delete" onClick={onDelete}>x</button>}
            </div>






        </div>
    )








}


export default BotCard;