import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-f466f.firebaseio.com/'
});

export default instance;