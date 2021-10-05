import axios from 'axios';

const endPoint ='http://localhost:10100';

const registerApi = req => axios.post(endPoint + '/register', req);
const getCountryCodesApi = req => axios.get(endPoint + '/countrycodes', {
    params:{
        country_code : req
    }
});


export {registerApi,
        getCountryCodesApi}