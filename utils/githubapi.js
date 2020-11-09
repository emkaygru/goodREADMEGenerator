const axios = require('axios');

const githubAPI = {
    async getUser(userResponses) {
        try {
            
            let response = await axios
            // sample url: https://api.github.com/users/emkaygru
                .get(`https://api.github.com/users/${userResponses.username}`);

            return response.data;
        } catch (err) {
            console.log(err);
        }
    }
};

module.exports = githubAPI;