import axios from 'axios';
const clientId = "ga6k48ywrxzdh7jwka0ns8582p2ut8";
const rootUrl = "https://api.twitch.tv/kraken";
const queryType = "search";
const searchType = "channels";
const channels_url = `${rootUrl}/${queryType}/${searchType}`;
const stream_url=`${rootUrl}/streams/`;

const api = {
    getChannels: searchTerm => (
        axios.get(channels_url, {
            params:{
                query: encodeURI(searchTerm),
                client_id: clientId
            },
            headers: {
                Accept: 'application/vnd.twitchtv.v5+json'
            }
        })
        .then((response) => {
            if(response.data.channels && response.data.channels.length > 0){
                return response.data.channels;
            }
                
        }).catch( err => {
            return err;
        }) 
        
    ),
    getStream: channel_id => (
        axios.get(`${stream_url}/${channel_id}`, {
            params: {
                client_id: clientId
            },
            headers: {
                Accept: 'application/vnd.twitchtv.v5+json'
            }
        })
        .then(response => response.data.stream)
    )

    
}
export default api;