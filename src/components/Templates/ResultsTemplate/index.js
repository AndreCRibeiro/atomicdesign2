import React from "react";
import styled from 'styled-components';

import * as Organisms from '../../../components/Organisms';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const dataReq = [
    {
        title: 'Result 1',
        subTitle: 'Description 1'
    },
    {
        title: 'Result 2',
        subTitle: 'Description 2'
    },
    {
        title: 'Result 3',
        subTitle: 'Description 3'
    }
];

const ResultsTemplate = ({ profileImage, title }) => {
    return (
        <Container>
            <Organisms.Header image={profileImage} onAvatarClick={() => console.log('Cliquei no avatar')} />
            <Organisms.ResultList data={dataReq} searchedIten={title} />
        </Container>
    );
};

export default ResultsTemplate;