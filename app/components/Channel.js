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
        
        const default_logo = logo === null ? 'https://static-cdn.jtvnw.net/jtv_user_pictures/xarth/404_user_300x300.png': logo;
        console.log(default_logo);
    return (
        <div className="channel">
            <header>
                <img src={default_logo} alt={`Logo of ${display_name}`} />
                <h1>{display_name}</h1>
            </header>
            <div className="content">
                <div className="fol-and-views">
                <span><i className="fa fa-users" /> {followers}</span>
                   <span> <i className="fa fa-eye" /> {views}</span>
                </div>
               <div className="played-game">
                    <i className="fa fa-gamepad" /><span> {game}</span>
                </div>
                <div className="language">
                    <i className="fa fa-language" /> <span> {language.toUpperCase()}</span> 
                </div>
                <div className="channel-status">
                    <p>{status}</p>    
                </div>      
            </div>
        </div>
    )
}

export default Channel;
