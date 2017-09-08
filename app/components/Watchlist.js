import React from 'react';
import User from './User';

function Watchlist(props) {

    
    return (
        <div id="watchlist-container">
            <h2 id="watchlist-title">Watchlist</h2>
            {
                props.watchlist_users.map( user => <User key={user._id} user={user}
                                                        removeFromWatchlist={props.removeFromWatchlist}
                                                    />)
            }
            {
                props.watchlist_users.length === 0 && <aside id="empty-watchlist">Currently empty !</aside>
            }
        </div>
    )
}

export default Watchlist
