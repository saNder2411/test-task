import ActionTypes from './action-types';


export const articlesRequest = () => ({type: ActionTypes.FETCH_ARTICLES_REQUEST});

export const articlesLoaded = (data: any) => ({type: ActionTypes.FETCH_ARTICLES_SUCCESS, payload: data});

export const articlesHasError = (error: any) => ({type: ActionTypes.FETCH_ARTICLES_FAILURE, payload: error});
