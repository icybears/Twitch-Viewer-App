import React from 'react';
import SearchBox from './SearchBox';
import api from '../utils/api';
import Channel from './Channel';
import Search from './Search';
////FAKE DATA//////
import mock from '../utils/mock-data';
/////////////////

 class App extends React.Component{

    state = {
        isFetching:false,
        searchTerm: null,
        channels: mock,
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
            <div id="root-container">
                <h1>Twitch Viewer App</h1>
                {isFetching && 
                    <div id="loader">
                        <aside><i id="spinner" className="fa fa-spinner"/>&nbsp;Fetching data...</aside>
                    </div>}
                {error && <div>{errorMsg}</div>}
                <Search channels={channels} searchName={this.searchName}/>
                
            </div>
        )
    }
}

export default App;



