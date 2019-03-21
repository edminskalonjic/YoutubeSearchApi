import axios from 'axios';
const KEY = 'AIzaSyBthryDdPak0wTm1uswhHY33xj9J90NWeE';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params :{
        part:'snippet',
        maxResult:5,
        key:KEY
    }
});