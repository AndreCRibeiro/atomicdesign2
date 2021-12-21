import React from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';

const Icon = styled.img`
    ${variant({
    variants: {
        list: {
            width: '40px',
            height: '40px',
        },
    },
})}
    border-radius: 50%;
`;

Icon.defaultProps = {
    width: '50px',
    height: '50px',
};


const Avatar = ({ image, ...props }) => {
    return <Icon src={image} {...props} />
}

export default Avatar;