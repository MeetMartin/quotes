import types from './types';

export const useActions = (state, dispatch) => ({
    requestRandomQuote: payload => dispatch({type: types.REQUEST_RANDOM_QUOTE, payload: payload})
});