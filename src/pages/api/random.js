import shuffle from '../../utils/shuffle'
import getHost from '../../utils/getHost'

var HOST = getHost()
var alreadyRequested = false
var oldRandom

export default async function getQuote(request, response) {
    if (alreadyRequested) {
        var hours = 6
        response.json(oldRandom)
        
        setTimeout(() => {
            console.log("Youalready requested here")
        }, hours * 60 * 60 * 1000)
    }
    else {
      
        var random = { type: "Random", data: [] }

        //gettign the data from this api and transforming it to json
        const quotes = await fetch(`${HOST}/api/quotes`)
        const allQuotes = await quotes.json()

        const tweets = await fetch(`${HOST}/api/twitter/allTweets`)
        const allTweets = await tweets.json()
    
        const news = await fetch(`${HOST}/api/goodNews`)
        const allNews = await news.json()
    
        var key = 0

        for (var item in allQuotes.data) {
            allQuotes.data[item].key = key
            key += 1
            random.data.push(allQuotes.data[item])
        }
        for (var item in allTweets.data) {
            allTweets.data[item].key = key
            key += 1
            random.data.push(allTweets.data[item])
        }
        for (var item in allNews.data) {
            allNews.data[item].key = key
            key += 1
            random.data.push(allNews.data[item])
        }

        random.data = shuffle(random.data)
    
        response.json(random)

        oldRandom = random
        alreadyRequested = true
    }
}
