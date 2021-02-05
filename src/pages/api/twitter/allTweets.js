import shuffle from '../../../utils/shuffle'

var alreadyRequested = false
var oldTweets 
//var HOST= 'https://goodvibesjornal.vercel.app'
var HOST= 'http://localhost:3000'


export default async function getTweets(request, response) {
    if (alreadyRequested) {
        var hours = 3
        setTimeout(() => {
            response.json(oldTweets)
            console.log("Youalready requested here")
        }, hours * 60 * 60 * 1000)
    }
    else {
        const users = [
            "LIVEpositivity",
            "911PSY",
            "PositivityPack",
            "bestmemes69",
            "NeverthinkTV",
            "happyyouare"
        ]

        var allTweets = {type: "Tweets", data: []}

        for( var user of users){
            var tweets = await getFromUser(user)

            for( var item of tweets){
                allTweets.data.push(item)
            }
            
        }
            
        allTweets.data = shuffle(allTweets.data)

        alreadyRequested = true
        oldTweets = allTweets 

        response.json(allTweets)
    }
        
}

async function getFromUser(user) {
    try {
        var url = `${HOST}/api/twitter/${user}`
        const apiResponse = await fetch(url) //Getting tweets from this user
        var tweets = await apiResponse.json(); //Transforming it into JSON
    }
    catch {
        var tweets = { fullText: "No Tweets avalible", user:"No Tweets avalible" }
    }
    return tweets
}