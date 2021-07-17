import { AsyncEffect, Maybe, randomOf, keysOf } from '@7urtle/lambda';

import { postToFunction } from './NetlifyFunction';

const quotes = {
    'Steve Jobs': [
        'Innovation distinguishes between a leader and a follower.',
        'Design is not just what it looks like and feels like. Design is how it works.',
        'Being the richest man in the cemetery doesn’t matter to me. Going to bed at night saying we’ve done something wonderful… that’s what matters to me.'
    ],
    'Albert Einstein': [
        'Creativity is intelligence having fun.',
        'Try not to become a man of success, but rather try to become a man of value.',
        'Great spirits have always encountered violent opposition from mediocre minds.'
    ]
};

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