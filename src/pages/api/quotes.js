var alreadyRequested = false
var oldQuotes

export default async function getQuote(request, response) {
  if (alreadyRequested) {
    response.setHeader('Cache-Controll', 's-maxage=10', 'stale-while-revalidate')
    response.json(oldQuotes)
    
    var hours = 6
    setTimeout(() => {
      console.log("Youalready requested here")
    }, hours * 60 * 60 * 1000)
  }
  
  else{
    var quotes = { type: "Quotes", data: [] }

    //gettign the data from this api and transforming it to json
    const typeDotFitResponse = await fetch("https://type.fit/api/quotes")
    const allQuotes = await typeDotFitResponse.json()

    //Getting 10 of 1643 quotes   
    for (var i = 0; i < 10; i++) {
      var randomNumber = Math.floor(Math.random() * 1644)
      allQuotes[randomNumber].key = i
      quotes.data.push(allQuotes[randomNumber])
    }

    response.setHeader('Cache-Controll', 's-maxage=10', 'stale-while-revalidate')
    response.json(quotes)
    oldQuotes = quotes
    alreadyRequested = true
  }
  //https://type.fit/api/quotes
  //"https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json"
}
