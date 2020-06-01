import ActionTypes from './action-types';


const reducer = (state: any, action: any) => {

  switch (action.type) {
    case ActionTypes.FETCH_ARTICLES_REQUEST:
      return {
        ...state,
        isLoadingArticles: true,
        articlesData: null,
        articlesError: null,
      };

    case ActionTypes.FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        isLoadingArticles: false,
        articlesData: action.payload,
        articlesError: null,
      };

    case ActionTypes.FETCH_ARTICLES_FAILURE:
      return {
        ...state,
        isLoadingArticles: true,
        articlesData: null,
        articlesError: action.payload,
      };
    default:
      return state;
  }


};

export default reducer;