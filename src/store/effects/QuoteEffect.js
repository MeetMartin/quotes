import { AsyncEffect, Maybe } from '@7urtle/lambda';

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

export const requestQuote = action =>
    AsyncEffect
    .of(reject => resolve => 
        setTimeout(() => resolve(
            Maybe.of({
                quote: 'Innovation distinguishes between a leader and a follower.',
                author: 'Steve Jobs'
            })
        ), 1000)
    );

// TODO: write randomOf for @7urtle/lambda