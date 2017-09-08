import React from 'react';
import SearchBox from './SearchBox';
import api from '../utils/api';
import Channel from './Channel';
import Search from './Search';
import Nav from './Nav';
import Watchlist from './Watchlist';
import Main from './Main';
import {Route, Switch} from 'react-router-dom';
// ////FAKE DATA//////
// import mock from '../utils/mock-data';
// /////////////////

 class App extends React.Component{

    state = {
        isFetching:false,
        searchTerm: null,
        channels: null,
        error: null,
        errorMsg: null,
        watchlist: [],
        watchlist_users:[]
    }

    searchName = (searchTerm) => {
        this.setState({
            searchTerm: searchTerm,
            isFetching: true,
            error: false,
            errorMsg: null
        },
            () => {
               api.getChannels(searchTerm)
                    .then(data => {
                        if(data && data.length>0){
                        this.setState({
                            error: false,
                            errorMsg:null,
                            isFetching: false,
                            searchTerm: null,
                            channels: data,
                        })
                    }
                    else{
                        throw "We couldn't find a match for your query";
                    }
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
    
    addToWatchlist = (id) => {
        this.setState( prevState => {
            const channels = this.state.channels;
           const newList = prevState.watchlist.concat([id]);
           const updatedUsers = prevState.watchlist_users
                                        .concat(
                                            channels.filter(channel => 
                                                channel._id === id))

            return({
                watchlist: newList,
                watchlist_users: updatedUsers
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
                   const updatedList = prevState.watchlist.filter(channelId => channelId !== id);
                   const updatedUsers = prevState.watchlist_users.filter(user =>user._id !== id);
                   return(
                       {
                           watchlist: updatedList,
                           watchlist_users: updatedUsers
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
                watchlist_users
            } = this.state;

        return(
            <div id="root-container">
                <h1>Twitch Viewer App<span>by Icybears</span></h1>
                <Nav />
                {isFetching && 
                    <div id="loader">
                        <aside><i id="spinner" className="fa fa-spinner"/>&nbsp;Fetching data...</aside>
                    </div>}
                <section id="view">
                        <Route exact path="/" component={Main} />
                        <Route path="/search" render={() => (
                            <Search channels={channels} 
                                searchName={this.searchName}
                                addToWatchlist={this.addToWatchlist}
                                removeFromWatchlist={this.removeFromWatchlist}
                                isWatched={this.isWatched}
                                error={error}
                                errorMsg={errorMsg}
                                />
                        )}/>
                        <Route path="/watchlist" render={() => (
                            <Watchlist watchlist_users={watchlist_users} 
                                      removeFromWatchlist={this.removeFromWatchlist}
                            />
                        )
                        } />
                </section>
            </div>
        )
    }
}

export default App;



