import React, { useContext, useEffect } from 'react';

import { StoreContext } from '../store/StoreContext';
import QuoteComponent from '../components/QuoteComponent';

const HomePage = () => {
    const {state, actions} = useContext(StoreContext);

    useEffect(() => {
        setInterval(actions.requestRandomQuote, 10000);
    }, [])

    return (
        <>
            <QuoteComponent quote={state.quote} author={state.author} />
        </>
    );
};

export default HomePage;