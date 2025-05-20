import axios from 'axios';

export default axios.create({
    baseURL:'https://0a72-2409-40f4-2002-4f51-bc49-b380-cf12-25d5.ngrok-free.app/',
    headers: {"ngrok-skip-browser-warning": "true"}
});