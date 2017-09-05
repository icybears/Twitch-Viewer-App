import React from 'react'

function Channel(props) {
    const { 
            display_name, 
            logo, 
            url, 
            followers,
            views,
            status,
            game,
            language
        } = props;
        
    return (
        <div className="channel">
            <img src={logo} alt={`Logo of ${display_name}`} />
            <h1>{display_name}</h1>
            <div>
                <span>Followers: {followers}</span>
                <span>Views: {views}</span>
                <span>Game: {game}</span>
                <span>Language: {language}</span> 
                <p>{status}</p>          
            </div>
        </div>
    )
}

export default Channel;
