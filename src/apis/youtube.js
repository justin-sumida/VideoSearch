import axios from 'axios';

const KEY = 'AIzaSyBP7mcuOl7S9ayAeaYoJUqAB_i3AjWL1WI';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});