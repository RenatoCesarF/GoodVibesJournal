const axios = require("axios");

export default async function getQuote(request, response) {

    /*
    pra essa api oque famos fazer é: escolher 10 numeros 
    aleatórios de 0 a response.data.lenght e pegar essas frases
    
    no caso de ter que fazer um novo search (como se pessoa chega no fim 
    do scroll e quer ver mais) sera necessário manter guardado um array das
    posições que já foram usadas 
    */
    async function getAllgoodNews() {
        axios.get('https://type.fit/api/quotes').then((response) => {
            console.log(response.data.length)
            return response;
        })
    }

    var quotes = []


    response.json(getAllgoodNews());
    /*
    const forismatic = axios.get("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json")
    axios.all([forismatic,typeDotFit]).then(axios.spread((...responses) => {
   
        quotes.push({
            Quote: responses[0].data.quoteText,
            Auth: responses[0].data.quoteAuthor
        });
     
        response.setHeader('Cache-Controll', 's-maxage=10', 'stale-while-revalidate')
        response.json(quotes);

      })) .catch(function (error) {
        // handle error
        console.log(error);
      })
      */
}
