import React, { useState } from "react";
import styled from 'styled-components';

import * as Atoms from '../../../components/Atoms';
import * as Molecules from '../../../components/Molecules';
import * as Organisms from '../../../components/Organisms';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const HomeTemplate = ({ profileImage, onSearch }) => {
    const [input, setInput] = useState('');

    return (
        <Container>
            <Organisms.Header image={profileImage} onAvatarClick={() => console.log('Cliquei no avatar')} />
            <Atoms.Logo mb="30px" mt="150px" />
            <Molecules.SearchField value={input} onChange={(e) => setInput(e.target.value)} onSearch={() => onSearch(input)} />
        </Container>
    );
};

export default HomeTemplate;