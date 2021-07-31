import { maybe } from '@7urtle/lambda';

import types from "../types";
import logger from '../../logger';
import { requestQuote, getQuoteFromNetlify } from '../effects/QuoteEffect';

/**
 * getQuote is a hook that processes requesting a quote through QuoteEffect asynchronously.
 * 
 * It logs error on failure of QuoteEffect or in case that QuoteEffect result is Nothing (null,
 * undefined, or empty).
 * 
 * On success it dispatches RECEIVE_RANDOM_QUOTE to reducer with the value of the quote.
 * 
 * @impure
 * @param {function} dispatch // dispatch function of the reducer middleware
 * @param {object} action // action object containing request data
 * @returns {null}
 */
export const getQuote = dispatch => action =>
    requestQuote(action) // returns AsyncEffect, can be replaced by getQuoteFromNetlify(action)
        .trigger
        (logger.error) // error in AsyncEffect
        (maybe // success in AsyncEffect
            (() => logger.error('Requesting quote returned invalid data,')) // Maybe result is Nothing
            (value => dispatch({type: types.RECEIVE_RANDOM_QUOTE, payload: value})) // Maybe result is Just
        );