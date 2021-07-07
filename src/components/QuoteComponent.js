import React from 'react';

const QuoteComponent = React.memo(props => {
    return (
        <>
            <div>
                <div>{props.quote}</div>
                <div>{props.author}</div>
            </div>
        </>
    );
});

export default QuoteComponent;