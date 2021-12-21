import React from 'react';
import styled from 'styled-components';
import { space, variant } from 'styled-system';

const TextStyle = styled.p`
    ${space}
    ${variant({
    variants: {
        resultHeader: {
            color: 'blue',
            fontSize: '20px',
        }
    },
})}
    cursor: ${props => props.cursor ? 'pointer' : ''};
`;

TextStyle.defaultProps = {
    color: '#000',
}


const Text = ({ text, cursor, ...props }) => {
    return <TextStyle cursor={cursor} {...props}>{text}</TextStyle>
}

export default Text;