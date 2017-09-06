import axios from 'axios';
const clientId = "ga6k48ywrxzdh7jwka0ns8582p2ut8";
const rootUrl = "https://api.twitch.tv/kraken";
const queryType = "search";
const searchType = "channels";
const url = `${rootUrl}/${queryType}/${searchType}`;

const api = {
    getChannels: searchTerm => (
        axios.get(url, {
            params:{
                query: encodeURI(searchTerm),
                client_id: clientId
            }
        })
        .then((response) => {
            if(response.data.channels && response.data.channels.length > 0){
                return response.data.channels;
            }else{
                throw "We couldn't find a match for your query";
            }
        })
        
    ),
    getUsers: arrayOfIds => {
       return arrayOfIds.map( id => (
           axios.get()
       ))
    }

    
}
export default api;