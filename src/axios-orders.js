import axios from 'axios';

const instance = axios.create({
    baseURL:'https://burgerbuilder-b8e8d.firebaseio.com/'
});


export default instance;