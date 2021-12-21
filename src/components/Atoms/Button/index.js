import React from 'react';
import styled from 'styled-components';
import { space } from 'styled-system'

const ButtonStyle = styled.button`
    ${space}
    width: 380px;
    height: 50px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: blue;

    &:hover {
        background: #bbb;
    }
`;


const Button = ({ text, onClick, ...props }) => {
    return <ButtonStyle {...props} onClick={onClick}>{text}</ButtonStyle>
}

export default Button;