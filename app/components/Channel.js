import React from 'react'

class Channel extends React.Component {

    handleClick = () => {
        const {
                isWatched,
                _id,
                addToWatchlist,
                removeFromWatchlist
            } = this.props;
        if(!isWatched(_id))
            addToWatchlist(_id);
        else
            removeFromWatchlist(_id)
    }


    render(){
    const { 
            display_name, 
            logo, 
            url, 
            followers,
            views,
            status,
            game,
            language,
            _id,
            isWatched
        } = this.props;
        
        const default_logo = logo === null ? 'https://static-cdn.jtvnw.net/jtv_user_pictures/xarth/404_user_300x300.png': logo;
       const buttonClass= isWatched(_id)?"add-to-watch added":"add-to-watch";
       const hasStatus = status ? status:"N/A";
    return (
        <div className="channel">
            <header>
                <img src={default_logo} alt={`Logo of ${display_name}`} />
                <h2 className="name">{display_name}</h2>
                
                <button className={buttonClass} 
                        onClick={this.handleClick}>
                   
                       {!isWatched(_id)
                                && <span><i className="fa fa-plus"/>&nbsp;&nbsp;Add to Watchlist</span>
                       }
                        {isWatched(_id) &&
                                 <span><i className="fa fa-check"/>&nbsp;&nbsp;Watchlisted</span>
                        }
                   
                </button>
                <button className="visit-channel">
                    <a href={url} target="_blank">
                        <i className="fa fa-globe" />&nbsp;&nbsp;Visit channel
                    </a></button>
            </header>
            <div className="content">
                <div className="fol-and-views">
                <span title="Followers"><i className="fa fa-users" />&nbsp;{followers}</span>
                   <span title="Views"><i className="fa fa-eye" />&nbsp;{views}</span>
                </div>
               <div title="Game"className="played-game">
                    <i className="fa fa-gamepad" /><span> {game}</span>
                </div>
                <div title="Language" className="language">
                    <i className="fa fa-language" /> <span> {language.toUpperCase()}</span> 
                </div>
                <div title="Status" className="channel-status">
                    <i className="fa fa-pencil-square-o"/><p>{hasStatus}</p>    
                </div>      
            </div>
        </div>
    )
    }
}

export default Channel;
