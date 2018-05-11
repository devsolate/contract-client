import Config from 'react-native-config';
const axios = require('axios');

const register = (email, name, password) => {
    return new Promise((resolve, reject) => {
        axios.post(Config.SERVER_URL + '/api/register', {
            email,
            name,
            password
          })
          .then(function (response) {
              resolve(response.data)
          })
          .catch(function (error) {
              reject(error)
          });
    })
}

export default {
    register
}