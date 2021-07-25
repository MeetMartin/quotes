import React, { useContext, useEffect, useState } from 'react';
import { randomOf } from '@7urtle/lambda';
import styled from 'styled-components';

import { StoreContext } from '../store/StoreContext';

const BackgroundDiv = styled.div`
    background: ${props => 'linear-gradient(135deg, ' + props.colors[0] + ', ' + props.colors[1] + ')'};
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
    ['#E27D60', '#C38D9E'],
    ['#553D67', '#99738E'],
    ['#242582', '#2F2FA2'],
    ['#8D8741', '#BC986A'],
    ['#379683', '#5CDB95'],
    ['#55BCC9', '#97CAEF'],
    ['#EDF5E1', '#8EE4AF'],
    ['#907163', '#379683'],
    ['#5D5C61', '#557A95'],
    ['#501B1D', '#64485C'],
    ['#190061', '#240090'],
    ['#6F2232', '#950740'],
    ['#2C3531', '#116466']
];

const Background = () => {
    const { state } = useContext(StoreContext);
    const [ backgroundColors, setBackgroundColors ] = useState(randomOf(colors));

    useEffect(() => setBackgroundColors(randomOf(colors)), [state.quote]);

    return <BackgroundDiv colors={backgroundColors} />;
};

export default Background;