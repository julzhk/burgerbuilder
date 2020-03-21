import axios from 'axios';

const instance = axios.create({
    baseURL:'https://<MYFIREBASE>.firebaseio.com/'
});


export default instance;