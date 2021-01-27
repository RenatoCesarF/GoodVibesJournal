
async function getGoodNews(request, response) {
   //TODO: add an ID to each new, thus we can filter it
    
    //Getting user country
    //const country = Intl.DateTimeFormat().resolvedOptions().locale;
    //const countryCode = country[3] + country[4];
    
    //Configurating the NewsAPI request 
    var url = 'http://newsapi.org/v2/top-headlines?' +
        //`q=${subject}&`+ //TO use it, need to change the "top-headlines" to "everything"
        //`country=${countryCode}&` +
        `country=us&` +
        `apiKey=${process.env.NEWS_API_KEY}`;
    
    const apiResponse = await fetch(url) //Getting all the top-headlines news 
    const responseToJson = await apiResponse.json(); //Transforming it into JSON

    //Starting the analyzing system
    var articles = responseToJson.articles;
    var Sentiment = require('sentiment');
    var sentiment = new Sentiment();
    
    var positiveArticles = [];


    //console.log(`\nThe initial number of articles is: ${articles.length}\n`)
    
    //Filtering and Getting just the good news 
    var counter = 0
    articles.forEach(element => {
        var eachSentiment = sentiment.analyze(element.title);//Choosing what to analyze
        if(eachSentiment.score>= 1){ //separeting the positive from the negative ones
            element.key = counter;
            counter += 1;
            positiveArticles.push(element);
        }
    });
    
    //console.log( `\nThe final number of articles is :${positiveArticles.length} \n`)
    

    //Configuring the response of our API
    response.setHeader('Cache-Controll','s-maxage=10','stale-while-revalidate')
    const newsInJson = response.json(positiveArticles);

    return newsInJson;

}

export default getGoodNews;