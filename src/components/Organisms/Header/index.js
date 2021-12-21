import React from 'react';
import styled from 'styled-components';

import * as Atoms from '../../Atoms';

export const Container = styled.header`
  width: 60vw;
  height: 62px;
  background-color: #F7FAFC;
  box-shadow: 0px 4px 6px -1px #222327, 0px 2px 4px -1px rgba(0, 0, 0, 0.01);
  display: flex;
  align-items: center;
  margin-bottom: 33px;
  border-radius: 8px;
  padding: 30px;
`;

const Header = ({ image, onAvatarClick }) => (
    <Container>
        <Atoms.Avatar image={image} onClick={onAvatarClick} />
        <Atoms.Text text="Profile" ml="30px" cursor />
        <Atoms.Text text="Images" ml="30px" cursor />
        <Atoms.Text text="Gmail" ml="30px" cursor />
    </Container>
);

export default Header;
