//Access: /api/teste

async function teste(request, response) {
    /*
    var url = 'http://newsapi.org/v2/top-headlines?' +
    'sources=bbc-news&' +
    'apiKey=0bc6e983c21043d9903ad4b21b930fd0';
    */
   

    const teste = await fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=0bc6e983c21043d9903ad4b21b930fd0')
    const toJson = await teste.json();
    //console.log(teste);
    response.json(toJson);
}

export default teste;