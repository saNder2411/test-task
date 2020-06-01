import {useState, useEffect, useCallback} from 'react';



const useRequest = (request) => {

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
        .then(({data}) => !cancelled && updateState({isLoading: false, data, error: null}))
        .catch((error) => !cancelled && updateState({isLoading: false, data: null, error}));
    }

    return () => {
      cancelled = true;
    };
  }, [isLoading, request]);

  return [{data, error}, doRequest];
};

export default useRequest;