const axios = require('axios')

module.exports = async (phrase) => {
    const results = await axios.get('https://www.googleapis.com/books/v1/volumes', {
        params: {
            format: 'json',
            q: `${phrase}`
        }
    })
    let customObject = {
            data: results.data, 
            status: results.status, 
            statusText: results.statusText, 
            headers: results.headers,
            requestHeader: results.config.headers
        }
    return JSON.stringify(customObject);

    

    //
    //TODO: return a formattedObj
    var formattedObj = {
        data: results.data,
        status: results.status,
        statusText: results.statusText,
        headers: results.headers,
        requestHeader: results.config.headers
    }

    //TODO: return the formattedObject
    return JSON.stringify(results.data);
}
