const axios = require("axios");


module.exports = {

    async getQuotes() {
        axios.get('/api/quotes').then((response) => {
            return response;
        })
    }


}