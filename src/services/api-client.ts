import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '9049b24aa33d41de95748666b1a3153c'
    }
})