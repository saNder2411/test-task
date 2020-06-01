import Axios from 'axios';

const createAPIService = (baseURL: string) => {

  const defaultOptions = {
    baseURL,
    timeout: 1000 * 10,
    withCredentials: true,
    headers: {
      'Content-Type': `application/json`,
    },
  };

  const instanceAPI = Axios.create(defaultOptions);


  return instanceAPI;
};

export default createAPIService;