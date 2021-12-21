import React from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';

const InputStyle = styled.input`
    ${space}
    width: 500px;
    height: 45px;
    border-radius: 20px;
    border: 3px solid #eee;
    padding: 20px;
    padding-left: 40px;
`;

const Icon = styled.img`
    position: relative;
    top: 3px;
    left: 30px;
    width: 15px;
    height: 15px;
`;

const Input = ({ placeholder, ...props }) => {
    return (
        <div>
            <Icon src='https://cdn-icons-png.flaticon.com/512/64/64673.png' />
            <InputStyle placeholder={placeholder} {...props} />
        </div>
    )
}

export default Input;