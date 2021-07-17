import React from 'react';
import styled from 'styled-components';

const QuoteDiv = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Delius+Swash+Caps&display=swap');
    font-family: 'Delius Swash Caps', cursive;
    margin: 0 auto;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translateY(-40%) translateX(-50%);
    color: #fff;
    font-size: 3em;
    text-align: left;
    div {
        text-align: right;
        margin-top: 0.5em;
    }
`;

const QuoteComponent = React.memo(props => {
    return (
        <QuoteDiv>
            <q>{props.quote}</q>
            <div>{props.author}</div>
        </QuoteDiv>
    );
});

export default QuoteComponent;