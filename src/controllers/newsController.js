const axios = require("axios");


module.exports = {

    async getAllgoodNews() {
        axios.get('http://localhost:3000/api/goodNews')
            .then(result => {
                return result;
            })
            .catch(function (error) {
            console.log(error);
            })
    }


}