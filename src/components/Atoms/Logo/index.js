import React from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';

const LogoStyle = styled.img`
    ${space}
    width: 330px;
    height: 130px;
`;

const Logo = ({ ...props }) => {
    return <LogoStyle src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' {...props} />
}

export default Logo;