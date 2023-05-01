import React from "react";


const YourBotarmy = ({bots, onrReleaseBot, onDeleteBot, onSelectBot}) => {



    
return (
    <div className="bot-army">
        <h2>Your Bot Army</h2>
        {bots.lenght > 0? botCards: <p>You have no bots enlisted.</p> }
    </div>
)


}


