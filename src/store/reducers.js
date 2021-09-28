import logger from '../logger';
import types from './types';

const initialState = {
    quote: 'Creativity is intelligence having fun.',
    author: 'Albert Einstein'
};

const reducer = (state = initialState, action) => {

    logger.debug('[reducer]', action.type);

    switch (action.type) {
        case(types.RECEIVE_RANDOM_QUOTE):
            return ({
                ...state,
                quote: action.payload.quote,
                author: action.payload.author
            });
        default:
            return state;
    }
};

export { initialState, reducer };