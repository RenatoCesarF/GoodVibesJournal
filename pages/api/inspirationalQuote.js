async function getQuote(request,response) {

    const apiResponse = await fetch("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json")
    const responseToJson = await apiResponse.json();

    response.setHeader('Cache-Controll','s-maxage=10','stale-while-revalidate')
    response.json({
        Phase: `"${responseToJson.quoteText}"`,
        Author: responseToJson.quoteAuthor,
    });
}

export default getQuote;