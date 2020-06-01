import createAPIService from './create-api-service';

export default class NewsAPIService {

  _baseUrl = `http://newsapi.org/v2/everything?q=bitcoin&from=2020-05-01&sortBy=publishedAt&apiKey=`;

  _API = createAPIService(this._baseUrl);

  _getResource = async (url: string) => {
    const res = await this._API.get(url);

    return res;
  };

  getAllArticles = async (url: string) => {
    const res = await this._getResource(url);

    return res;
  };

}
