import { AsyncEffect, isEqual, Maybe, map } from '@7urtle/lambda';
import axios from 'axios';

const api_url = isEqual('development')(process.env.NODE_ENV) ? 'http://localhost:5000' : '/.netlify/functions';

export const postToFunction = path => data =>
    map(response => Maybe.of(response.data))
    (
        AsyncEffect.ofPromise(() =>
            axios.post(
                api_url + path,
                data
            )
        )
    );