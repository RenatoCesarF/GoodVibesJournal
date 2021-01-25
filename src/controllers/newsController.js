const axios = require("axios");


module.exports = {

    async getAllgoodNews() {
        axios.get('/api/goodNews').then((response) => {
            return response;
        })
    }


}