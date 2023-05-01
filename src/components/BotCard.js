import React from "react";

const BotCard = ({bot, buttonText, onClick, onSelect, onDelete}) => {
    const {id, name, health, damage, armor, bot_class, catchphrase, avatar_url} = bot;

    return (
        <div className="bot_card">
            <div className="card-top" onClick={onSelect}>
                <img src={avatar_url} alt={name} />
                <h3>{name}</h3>
                <p>"{catchphrase}"</p>
            </div>
            <div className="card-bottom">
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