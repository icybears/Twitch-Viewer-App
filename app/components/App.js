import React from 'react';
import SearchBox from './SearchBox';
import api from '../utils/api';

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
        return(
            <div>
                <h1>Twitch Viewer App</h1>
                <SearchBox searchName={this.searchName}/>
            </div>
        )
    }
}

export default App;



