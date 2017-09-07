import React from 'react'
import Channel from './Channel';
import SearchBox from './SearchBox';

function Search(props) {

    const { 
            channels, 
            searchName, 
            addToWatchlist,
            isWatched,
            removeFromWatchlist
        } = props;
    return (
        <div className="page-container">
                <SearchBox searchName={searchName}/>
               
                <div id="channels-container">
                {
                    channels && 
                    channels.map(channel => <Channel key={channel._id} 
                                                    {...channel} 
                                                    addToWatchlist={addToWatchlist}
                                                    isWatched={isWatched}
                                                    removeFromWatchlist={removeFromWatchlist}
                                                    />)
                }
                </div>
        </div>
    )
}

export default Search;
