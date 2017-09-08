import React from 'react'
import Channel from './Channel';
import SearchBox from './SearchBox';

function Search(props) {

    const { 
            channels, 
            searchName, 
            addToWatchlist,
            isWatched,
            removeFromWatchlist,
            error,
            errorMsg
        } = props;
    return (
        <div id="search-container">
            <h2 id="search-title">Search</h2>
                <SearchBox searchName={searchName}/>
               { error && <aside className="error-msg"><i className="fa fa-exclamation-circle"/>&nbsp;{errorMsg}</aside>}
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
