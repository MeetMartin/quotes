import React, { useContext, useEffect, useState } from 'react';
import { randomOf } from '@7urtle/lambda';
import styled from 'styled-components';

import { StoreContext } from '../store/StoreContext';
import QuoteComponent from '../components/QuoteComponent';

const BackgroundDiv = styled.div`
    background: ${props => 'linear-gradient(135deg, ' + props.colors[0] + ', ' + props.colors[1] + ');'}
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 0;
`;

const colors = [
    ['#41B3A3', '#85DCB0'],
    ['#99D5F3', '#DBB3E7'],
    ['#E27D60', '#C38D9E']
];

const HomePage = () => {
    const { state, actions } = useContext(StoreContext);
    const { backgroundColors, setBackgroundColors } = useState(randomOf(colors));

    useEffect(() => {
        setInterval(actions.requestRandomQuote, 10000);
    }, []);
    useEffect(() => setBackgroundColors(randomOf(colors)), [state.quote]);

    return (
        <>
            <BackgroundDiv colors={backgroundColors} />
            <QuoteComponent quote={state.quote} author={state.author} />
        </>
    );
};

export default HomePage;