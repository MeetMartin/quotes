import { AsyncEffect, Maybe, randomOf, keysOf } from '@7urtle/lambda';

import quotes from '../../../quotesList';
import { postToFunction } from './NetlifyFunction';

const getRandomQuote = quotes =>
    (author =>
        ({
            'quote': randomOf(quotes[author]),
            'author': author
        })
    )
    (randomOf(keysOf(quotes)));

export const requestQuote = action =>
    AsyncEffect
    .of(reject => resolve => 
        setTimeout(() => resolve(
            Maybe.of(getRandomQuote(quotes))
        ), 1000)
    );

export const getQuoteFromNetlify = postToFunction('/quote');