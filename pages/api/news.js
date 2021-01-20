//Access: /api/teste

async function getGoodNews(request, response) {
   
    //Getting user country
    const country = Intl.DateTimeFormat().resolvedOptions().locale;
    const countryCode = country[3] + country[4];
    
    var subject = "something"
    
    var url = 'http://newsapi.org/v2/top-headlines?' +
        `q=${subject}&`+
        //`country=${countryCode}&` +
        `country=us&` +
        `apiKey=${process.env.NEWS_API_KEY}`;
    
 
    console.log(url)
    const apiResponse = await fetch(url)
    const responseToJson = await apiResponse.json();
  

    response.setHeader('Cache-Controll','s-maxage=10','stale-while-revalidate')
    response.json(responseToJson);
}

export default getGoodNews;