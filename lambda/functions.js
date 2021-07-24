import Server from '@7urtle/server';
import createLogger from '@7urtle/logger';
import { AsyncEffect, compose, map } from '@7urtle/lambda';

import { handler as QuoteHandler } from './quote/quote';

/**
 * Turns node HTTP request into event object expected by Netlify function handler
 * 
 * @HindleyMilner requestToNetlifyHandlerEvent :: object -> object
 *
 * @pure
 * @param {object} request Node HTTP request object
 * @returns {object} Netlify function handler event
 * 
 * @example
 * requestToNetlifyHandlerEvent(request); // => event
 */
const requestToNetlifyHandlerEvent = request =>
    ({
        ...request,
        body: JSON.stringify(request.data)
    });

/**
 * Wraps Netlify handler into AsyncEffect.
 * 
 * @HindleyMilner handlerToAsyncEffect :: (a -> b) -> object -> AsyncEffect.of(() -> (object -> b))
 *
 * @pure
 * @param {function} handler Netlify function handler
 * @param {object} request Netlify event object
 * @returns {AsyncEffect} AsyncEffect of Netlify function handler
 * 
 * @example
 * handlerToAsyncEffect(async (event, context) => ({}))({path: '/path'}); // => AsyncEffect
 */
const handlerToAsyncEffect = handler => event => AsyncEffect.ofPromise(() => handler(event));

/**
 * Adds cors headers to support local development against localhost:8080
 * 
 * @HindleyMilner addCORSForLocalDevelopment :: object -> object
 *
 * @pure
 * @returns {object} response object
 * 
 * @example
 * addCORSForLocalDevelopment({});
 * // => {
 *  'Access-Control-Allow-Origin': 'http://localhost:8080',
 *  'Access-Control-Request-Method': 'POST, OPTIONS, GET, HEAD',
 *  'Access-Control-Allow-Headers': 'Content-Type, Authorization'
 * }
 */
const addCORSForLocalDevelopment = response => ({
    ...response,
    'Access-Control-Allow-Origin': 'http://localhost:8080',
    'Access-Control-Request-Method': 'POST, OPTIONS, GET, HEAD',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization'
});

/**
 * Makes sure that response data appear in the response content
 * 
 * @HindleyMilner getResponseData :: object -> object
 *
 * @pure
 * @returns {object} response objecct
 * @example
 * getResponseData({body: 'hello world'}); // => {body: 'hello world', content: 'hello world'}
 */
const getResponseData = response => ({
    ...response,
    content: response.body
});

/**
 * Add no-store Cache Control header
 * 
 * @HindleyMilner noCacheHeader :: object -> object
 *
 * @pure
 * @returns {object} response object
 * 
 * @example
 * noCacheHeader({anything: 'anything'}); // => {anything: 'anything', 'Cache-Control': 'no-store'}
 */
 const noCacheHeader = response => ({
    ...response,
    'Cache-Control': 'no-store'
});

/**
 * Sets response status based on Netlify function statusCode
 * 
 * @HindleyMilner setStatus :: object -> object
 *
 * @pure
 * @returns {object} response with status
 * 
 * @example
 * setStatus({statusCode: 200}); // => {statusCode: 200, status: 200}
 */
const setStatus = response => ({
    ...response,
    status: response.statusCode
})

/**
 * Accepts Netlify function handler and returns AsyncEffect accepted by @lambda/server route response
 * 
 * @HindleyMilner netlifyFunctionHandler :: ((object, object) -> object) -> object -> AsyncEffect
 *
 * @pure
 * @param {function} handler Netlify function handler
 * @returns {AsyncEffect} AsyncEffect accepted by @lambda/server route response
 * 
 * @example
 * netlifyFunctionHandler(handler)(request); // => AsyncEffect
 */
const netlifyFunctionHandler = handler => compose(
    map(getResponseData),
    map(noCacheHeader),
    map(addCORSForLocalDevelopment),
    map(setStatus),
    handlerToAsyncEffect(handler),
    requestToNetlifyHandlerEvent
);

const rootPath = {
    any: request =>
        AsyncEffect.of((_, resolve) => resolve({
            ...request,
            status: 200,
            contentType: 'text/plain',
            content: 'This is root. I am working but nothing to see here.'
        }))
}

const optionsAPI = request =>
    AsyncEffect.of((_, resolve) => resolve({
        ...request,
        status: 204,
        allow: 'OPTIONS, POST',
        'Access-Control-Allow-Origin': 'http://localhost:8080',
        'Access-Control-Request-Method': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    }));

const configuration = {
    options: {
        port: 5000
    },
    logger: createLogger(),
    routes: [
        {
            path: '/',
            api: rootPath
        },
        {
            path: '/quote/*',
            api: {
                options: optionsAPI,
                any: netlifyFunctionHandler(QuoteHandler)
            }
        }
    ],
};

Server.start(configuration);