import React from 'react';
import SearchBox from './SearchBox';
import api from '../utils/api';
import Channel from './Channel';
import Search from './Search';
import Nav from './Nav';
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
        watchlist: [],
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
    
    addToWatchlist = (channel_id) => {
        this.setState( prevState => {
           const newList = prevState.watchlist.concat([channel_id]);

            return({
                watchlist: newList
            })
        })
    }
    isWatched = (id) => {
        const watchlist = this.state.watchlist;
        if(watchlist.indexOf(id) !== -1){
            return true;
        }else{
            return false;
        }
    }
    removeFromWatchlist = (id) => {
        if(this.state.watchlist.indexOf(id) !== -1){
            this.setState( prevState => {
                   const updated = prevState.watchlist.filter(channelId => channelId !== id);
                   return(
                       {
                           watchlist: updated
                       }
                   )
            })
        }
    }
    render(){
        const {
                channels,
                isFetching,
                error,
                errorMsg,
            } = this.state;
        return(
            <div id="root-container">
                <h1>Twitch Viewer App<span>by Icybears</span></h1>
                <Nav />
                {isFetching && 
                    <div id="loader">
                        <aside><i id="spinner" className="fa fa-spinner"/>&nbsp;Fetching data...</aside>
                    </div>}
                {error && <div>{errorMsg}</div>}
                <section id="view">
                    <Search channels={channels} 
                            searchName={this.searchName}
                            addToWatchlist={this.addToWatchlist}
                            removeFromWatchlist={this.removeFromWatchlist}
                            isWatched={this.isWatched}
                            />
                </section>
            </div>
        )
    }
}

export default App;



