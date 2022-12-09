export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

 export const youtubeOptions = {
    method: 'GET',   
    headers: {
      'X-RapidAPI-Key': 'acb5d2c452mshf859956a5f6310ap1bcc87jsnfcc1b63d3c78',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}