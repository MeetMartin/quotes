import React from 'react';
import styled from 'styled-components';

import { StoreProvider } from './store/StoreContext';
import HomePage from './pages/HomePage';

const BaseStyles = styled.span`
    @import url('https://fonts.googleapis.com/css2?family=Delius+Swash+Caps&display=swap');
    font-family: 'Delius Swash Caps', cursive;
    color: #FFF;
`;

/**
 * Base Template component holding the basic web application
 * @returns {JSX.Element}
 */
const App = () => {
    return (
        <StoreProvider>
            <BaseStyles>
                <HomePage />
            </BaseStyles>
        </StoreProvider>
    );
};

export default App;