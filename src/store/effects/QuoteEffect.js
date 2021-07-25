import { AsyncEffect, Maybe, randomOf, keysOf } from '@7urtle/lambda';

import quotes from '../../../quotesList';
import { postToFunction } from './NetlifyFunction';

/**
 * Finds a random quote in an array of quotes and returns it.
 * 
 * @HindleyMilner getRandomQuote :: [[a]] -> [a]
 *
 * @pure
 * @param {object} action global state action
 * @returns {AsyncEffect} AsyncEffect of Maybe of quote object
 * 
 * @example
 * getRandomQuote(quotesList);
 * // => {
 *  quote: 'If you can dream it, you can do it.'
 *  author: 'Walt Disney'
 * } 
 */
const getRandomQuote = quotes =>
    (author =>
        ({
            'quote': randomOf(quotes[author]),
            'author': author
        })
    )
    (randomOf(keysOf(quotes)));

/**
 * Ansynchronous request that maybe returns a random quote.
 * Internally it just uses a timeout to return a quote with 1 second delay.
 * 
 * @HindleyMilner requestQuote :: object -> AsyncEffect.of(Maybe.of(object))
 *
 * @pure
 * @param {object} action global state action
 * @returns {AsyncEffect} AsyncEffect of Maybe of quote object
 * 
 * @example
 * requestQuote()
 * .trigger
 * (error => console.log(error))
 * (MaybeQuote =>
 *  maybe
 *  (() => console.log('Quote is Nothing.'))
 *  (quote => console.log(`"${quote.quote}" by ${quote.author}`))
 *  (MaybeQuote)
 * );
 */
export const requestQuote = action =>
    AsyncEffect
    .of(reject => resolve => 
        setTimeout(() => resolve(
            Maybe.of(getRandomQuote(quotes))
        ), 1000)
    );

/**
 * Ansynchronous request that maybe returns a random quote.
 * It calls Netlify function to obtain the data by partial application of postToFunction function.
 * 
 * @HindleyMilner requestQuote :: object -> AsyncEffect.of(Maybe.of(object))
 *
 * @pure
 * @param {object} action global state action
 * @returns {AsyncEffect} AsyncEffect of Maybe of quote object
 * 
 * @example
 * requestQuote()
 * .trigger
 * (error => console.log(error))
 * (MaybeQuote =>
 *  maybe
 *  (() => console.log('Quote is Nothing.'))
 *  (quote => console.log(`"${quote.quote}" by ${quote.author}`))
 *  (MaybeQuote)
 * );
 */
export const getQuoteFromNetlify = postToFunction('/quote');