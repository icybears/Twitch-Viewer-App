import React from 'react';
import SearchBox from './SearchBox';
import api from '../utils/api';
import Channel from './Channel';

 class App extends React.Component{

    state = {
        isFetching:false,
        searchTerm: null,
        channels: null,
        error: null,
        errorMsg: null,
        
    }

    searchName = (searchTerm) => {
        this.setState({
            searchTerm: searchTerm,
            isFetching: true
        },
            () => {
               api.getChannels(searchTerm)
                    .then(data => {
                        this.setState({
                            error: false,
                            errorMsg:null,
                            isFetching: false,
                            searchTerm: null,
                            channels: data,
                        })
                    })
                    .catch( err => {
                        this.setState({
                            isFetching: false,
                            searchTerm: null,
                            error: true,
                            errorMsg: err,
                        })
                    })
            }
        )
    }

    render(){
        const {
                channels,
                isFetching,
                error,
                errorMsg
            } = this.state;
        return(
            <div>
                <h1>Twitch Viewer App</h1>
                <SearchBox searchName={this.searchName}/>
                {isFetching && <div>Fetching data...</div>}
                {error && <div>{errorMsg}</div>}
                {
                    channels && 
                    channels.map(channel => <Channel key={channel.display_name} 
                                                    {...channel} />)
                }
            </div>
        )
    }
}

export default App;



