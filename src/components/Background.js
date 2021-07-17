import React, { useContext, useEffect, useState } from 'react';
import { randomOf } from '@7urtle/lambda';
import styled from 'styled-components';

import { StoreContext } from '../store/StoreContext';

const BackgroundDiv = styled.div`
    background: ${props => console.log(props.colors) || 'linear-gradient(135deg, ' + props.colors[0] + ', ' + props.colors[1] + ');'}
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

const Background = () => {
    const { state } = useContext(StoreContext);
    const [ backgroundColors, setBackgroundColors ] = useState(randomOf(colors));

    useEffect(() => setBackgroundColors(randomOf(colors)), [state.quote]);

    return <BackgroundDiv colors={backgroundColors} />;
};

export default Background;