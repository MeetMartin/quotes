import React from 'react';

import { StoreProvider } from './store/StoreContext';
import HomePage from './pages/HomePage';

/**
 * Base Template component holding the basic web application
 * @returns {JSX.Element}
 */
const App = () => {
    return (
        <StoreProvider>
            <HomePage />
        </StoreProvider>
    );
};

export default App;