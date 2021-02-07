import getHost from '../../../utils/getHost'
import shuffle from '../../../utils/shuffle'

var alreadyRequested = false
var oldTweets 

var HOST= getHost()


export default async function getTweets(request, response) {
    if (alreadyRequested) {
        var hours = 24
        response.json(oldTweets)
        
        setTimeout(() => {
            console.log("Youalready requested here")
        }, hours * 60 * 60 * 1000)
    }
    else {
        const users = [
            "LIVEpositivity",
            "911PSY",
            "PositivityPack",
            //"bestmemes69",
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
        
        response.json(allTweets)

        alreadyRequested = true
        oldTweets = allTweets 
    }
}

async function getFromUser(user) {
    var url = `${HOST}/api/twitter/${user}`
    const apiResponse = await fetch(url) //Getting tweets from this user
    var tweets = await apiResponse.json(); //Transforming it into JSON
    return tweets
}