import {useState, useEffect, useCallback} from 'react';


type Request = () => any;


const useRequest = (request: Request) => {

  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const updateState = ({isLoading = true, data = null, error = null} = {}) => {
    setLoading(isLoading);
    setData(data);
    setError(error);
  };

  const doRequest = useCallback(() => updateState(), []);

  useEffect(() => {
    let cancelled = false;

    if (isLoading) {
      request()
        .then(({data}: {data: Array<{}>}) => !cancelled && updateState({isLoading: false, data, error: null}))
        .catch(({response}: {response: any}) => !cancelled && updateState({isLoading: false, data: null, error: response}));
    }

    return () => {
      cancelled = true;
    };
  }, [isLoading, request]);

  return [{data, error}, doRequest];
};

export default useRequest;