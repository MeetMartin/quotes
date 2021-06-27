import types from './types';
import logger from '../logger';

const applyMiddleware = state => dispatch => action => {
    switch (action.type) {
        case types.REQUEST_RANDOM_QUOTE:
            logger.debug('[applyMiddleware]', types.REQUEST_RANDOM_QUOTE);
            // call hook here
            break;
    };
    dispatch(action);
};

export { applyMiddleware };