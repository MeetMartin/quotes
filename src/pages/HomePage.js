import React, { useContext, useEffect } from 'react';

import { StoreContext } from '../store/StoreContext';
import { QuoteComponent, Background, Footer } from '../components';

const HomePage = () => {
    const { state, actions } = useContext(StoreContext);

    useEffect(() => {
        setInterval(actions.requestRandomQuote, 10000);
    }, []);

    return (
        <>
            <Background />
            <QuoteComponent quote={state.quote} author={state.author} />
            <Footer />
        </>
    );
};

export default HomePage;