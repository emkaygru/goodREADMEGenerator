const axios = require('axios');

const githubAPI = {
    async getUser(userResponses) {
        try {
            // sample url: https://api.github.com/users/emkaygru
            let response = await axios

                .get(`https://api.github.com/users/${userResponses.username}`);

            return response.data;
        } catch (err) {
            console.log(err);
        }
    }
};

module.exports = githubAPI;