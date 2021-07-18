import { randomOf, keysOf } from '@7urtle/lambda';

import quotes from '../../quotesList';

const getRandomQuote = quotes =>
    (author =>
        ({
            'quote': randomOf(quotes[author]),
            'author': author
        })
    )
    (randomOf(keysOf(quotes)));

const handler = async (event, context) =>
  ({
    statusCode: 200,
    body: JSON.stringify(getRandomQuote(quotes))
  });

export {handler};