import React from 'react';
import styled from 'styled-components';

const FooterDiv = styled.div`
    position: absolute;
    right: 2em;
    bottom: 2em;
    font-size: 0.8em;
    a {
        color: #fff;
        text-decoration: none;
        font-weight: bold;
    }
`;

const Footer = () =>
    <FooterDiv>
        by <a href='https://www.meet-martin.com/' target='_blank'>Martin Novak</a>
    </FooterDiv>;

export default Footer;