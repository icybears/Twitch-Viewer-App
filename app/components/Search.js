import React from 'react'
import Channel from './Channel';
import SearchBox from './SearchBox';

function Search(props) {

    const {channels, searchName} = props;
    return (
        <div className="page-container">
                <SearchBox searchName={searchName}/>
               
                <div id="channels-container">
                {
                    channels && 
                    channels.map(channel => <Channel key={channel.display_name} 
                                                    {...channel} />)
                }
                </div>
        </div>
    )
}

export default Search;
