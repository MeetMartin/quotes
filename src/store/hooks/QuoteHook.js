import { isNothing } from '@7urtle/lambda';
import types from "../types";
import logger from '../../logger';
import { requestQuote } from '../effects/QuoteEffect';

export const getQuote = dispatch => action =>
    requestQuote(action)
        .trigger
        (logger.error)
        (result =>
            isNothing(result.data)
                ? logger.error('Requesting quote returned invalid data,')
                : dispatch({type: types.RECEIVE_RANDOM_QUOTE, payload: result.data})
        )