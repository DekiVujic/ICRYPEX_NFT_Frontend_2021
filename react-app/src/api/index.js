import axios from 'axios';

const endPoint ='http://localhost:10100';



const registerApi = req => axios.post(endPoint + '/register', req);

export {registerApi}