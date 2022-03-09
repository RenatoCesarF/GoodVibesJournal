import Sentiment from 'sentiment'

export default async function getGoodNews(request, response) {
   //TODO: add an ID to each new, thus we can filter it
    //Configurating the NewsAPI request 
    const url = 'http://newsapi.org/v2/top-headlines?' +
        `country=us&` +
        `apiKey=${process.env.NEWS_API_KEY}`;
    
    const apiResponse = await fetch(url) //Getting all the top-headlines news 
    const responseToJson = await apiResponse.json(); //Transforming it into JSON

    //Starting the analyzing system
    var articles = responseToJson.articles;

    const sentiment = new Sentiment();
    
    var positiveArticles = {type: "News", data:[]};


    //Filtering and Getting just the good news 
    var counter = 0

    articles.forEach(element => {
        var eachSentiment = sentiment.analyze(element.title);//Choosing what to analyze
        if(eachSentiment.score>= 1){ //separeting the positive from the negative ones
            var eachNew = {
                key: counter,
                title: element.title,
                description: element.description,
                urlToImage: element.urlToImage,
                url: element.url
            }

            counter += 1;
            positiveArticles.data.push(eachNew);
        }
    });
    
    response.setHeader('Cache-Controll','s-maxage=10','stale-while-revalidate')
    response.json(positiveArticles);
}
