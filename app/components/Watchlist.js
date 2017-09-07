import React from 'react';
import User from './User';

function Watchlist(props) {

    
    return (
        <div id="watchlist-container">
            {
                props.watchlist_users.map( user => <User key={user._id} user={user}/>)
            }
        </div>
    )
}

export default Watchlist
