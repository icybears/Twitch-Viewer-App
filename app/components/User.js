import React from 'react'
import api from '../utils/api';

class User extends React.Component {

    state = {
        fetching: null,
        isOnline: null,
        viewers: null,
        preview_url: null,
        game:null
    }
    componentDidMount = () => {
        const {_id} = this.props.user;
        console.log(_id);
        api.getStream(_id)
        .then( data => {
            console.log(data);
            if(data === null){
               this.setState({
                   fetching:false,
                   isOnline:false,
                   viewers:'N/A',
                   preview_url:null,
                   game:'N/A'
               })
            }else{
                this.setState({
                    fetching: false,
                    isOnline: true,
                    viewers: data.viewers,
                    preview_url: data.preview.medium,
                    game:data.game
                })
            }
            
        })
    }
    render(){
        const { 
            display_name, 
            logo, 
            url, 
            followers,
            views,
            status,
            game,
            language,
            _id,
        } = this.props.user;
        const {
            fetching,
            isOnline,
            viewers,
            preview_url
        } = this.state;
        const logo_url = (logo!== null) ? logo:"https://static-cdn.jtvnw.net/jtv_user_pictures/xarth/404_user_300x300.png"
        return (
            <div className="user">
                <header className="user-header">
                    <img src={logo_url} alt={`Logo of ${display_name}`} />
                    <h2>{display_name}</h2>
                </header>
                <main className="user-info">
                    { fetching !== false && <aside>Updating status</aside>}
                    <p className="online-status">
                        Currently&nbsp;{isOnline && <span className="online">online</span>}
                        {!isOnline && <span className="offline">offline</span>}
                    </p>
                    
                    <p className="viewers-count">
                        Viewers:&nbsp;{isOnline && <span className="viewers">{viewers}</span>}
                        {!isOnline && <span className="viewers">N/A</span>}
                    </p>
                    <p className="game-played">
                        Game:&nbsp;{isOnline && <span className="game-playing">{game}</span>}
                        {!isOnline && <span className="game-playing">N/A</span>}
                    </p>
                    <p className="preview">
                        {isOnline && <button><a href={preview_url} target="_blank">Stream Preview</a></button>}
                        {!isOnline && <span>No preview available</span>}                        
                    </p>
                    <p className="visit-channel">
                        <button><a href={url} target="_blank">Visit Channel</a></button>
                    </p>
                </main>
            </div>
    )
}
}

export default User;
