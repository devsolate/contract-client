import Config from 'react-native-config';
const axios = require('axios');

const register = (email, name, password) => {
    return new Promise((resolve, reject) => {
        console.log(Config.SERVER_URL + '/api/register')
        axios.post(Config.SERVER_URL + '/api/register', {
            email,
            name,
            password
          })
          .then(function (response) {
            console.log("success", response);
          })
          .catch(function (error) {
            console.log("error", error);
          });
    })
}

export default {
    register
}