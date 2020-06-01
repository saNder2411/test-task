import {useCallback} from 'react';
import NewsAPIService from '../../service/news-service';
import useRequest from '../useRequest/use-request';


const newsAPIService = new NewsAPIService();

const useService = (url: string) => {

  const request = useCallback(() => newsAPIService.getAllArticles(url), [url]);

  return useRequest(request);
};


export default useService;