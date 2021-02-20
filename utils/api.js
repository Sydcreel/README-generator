const axios = require('axios');
const api = {
    async getUser(userResponses) {
        try {let response = await axios
        
        .get(`https://api.github.com/users/${userResponse.username}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
    }
};

//export module to call index.js
module.exports = api;