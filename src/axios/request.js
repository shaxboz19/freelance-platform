import axios from 'axios'

const requestAxios = axios.create({
    baseURL : 'https://frilance-f7222-default-rtdb.firebaseio.com/'
});

export default requestAxios