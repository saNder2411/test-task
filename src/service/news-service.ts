import createAPIService from './create-api-service';

export default class NewsAPIService {

  _baseUrl = `http://newsapi.org/v2`;

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
