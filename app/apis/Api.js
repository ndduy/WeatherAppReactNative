//@flow

/*
Client ID (Consumer Key)
dj0yJmk9Q25FRnBGMTNHd0FOJmQ9WVdrOVEzWnZSMVZUTXpBbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD1jZg--
Client Secret (Consumer Secret)
ef276133beba9e4b44bb5a3f2f4ca9957b5d9010
*/

const API_YAHOO_QUERY =
  "https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where ";

class Api {
  static fetchWeather(city: String) {
    const API_YAHOO_URL = API_YAHOO_QUERY + `text="${city}")&format=json`;
    return fetch(API_YAHOO_URL);
  }
}

export default Api;
