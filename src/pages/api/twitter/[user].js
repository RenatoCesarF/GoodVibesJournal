/*
TODO: Exclude text part when start https, deled all after https
*/

import Twitter from "twitter-lite";

export default async function getUserTweets(require, response) {
    const { query: { user } } = require
    

    var amount = 10

    const client = new Twitter({
        subdomain: "api",
        consumer_key: process.env.TWITTER_API_KEY,
        consumer_secret: process.env.TWITTER_SECRET_API_KEY,
        access_token_key: process.env.TWITTER_TOKEN,
        access_token_secret: process.env.TWITTER_TOKEN_SECRET
    });

    
    let timeline = await client.get("statuses/user_timeline", {
        screen_name: user,
        exclude_replies: true,
        include_rts: false,
        tweet_mode: "extended",
        count: amount + 2
    });
    
    

    const results = timeline.map(x => {
        //Defining the midea URL
        var mediaUrl = null

        if (x.extended_entities) {
            try {
                mediaUrl = x.extended_entities.media[0].video_info.variants[2].url
            }
            catch (e) {
                mediaUrl = x.extended_entities.media[0].media_url
            }
        } 

        //Deleting the HTTP part of the tittle
        var httpLocal = x.full_text.lastIndexOf('http')
        x.full_text = x.full_text.substring(0, httpLocal);

        return ({
            fullText: x.full_text,
            mediaUrl: mediaUrl,
            user: x.user.screen_name,
            userPhoto: x.user.profile_image_url,
            link: `https://twitter.com/${x.user.screen_name}/status/${x.id_str}`
        })
    }
    );

    response.json(results)
}