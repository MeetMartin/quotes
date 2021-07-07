import types from './types';
import logger from '../logger';
import { getQuote } from './hooks/QuoteHook';

const applyMiddleware = state => dispatch => action => {
    switch (action.type) {
        case types.REQUEST_RANDOM_QUOTE:
            logger.debug('[applyMiddleware]', types.REQUEST_RANDOM_QUOTE);
            getQuote(dispatch)(action);
            break;
    };
    dispatch(action);
};

export { applyMiddleware };