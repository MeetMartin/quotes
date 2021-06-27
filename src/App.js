import React from 'react';
import { StoreProvider } from "./store/StoreContext";

/**
 * Base Template component holding the basic web application
 * @returns {JSX.Element}
 */
const App = () => {
    return (
        <StoreProvider>
            <h1>Hello world</h1>
        </StoreProvider>
    );
};

export default App;