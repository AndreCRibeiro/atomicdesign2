import React from "react";
import styled from 'styled-components';

import * as Atoms from '../../Atoms';

const Container = styled.div`
    display: flex;
    width: 60vw;
    height: 80px;
    border-bottom: 3px solid grey;
    padding: 20px 30px;
`;

const TextDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 30px;
`;


const ResultItem = ({ titleText, subText }) => (
    <Container>
        <Atoms.Avatar variant="list" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
        <TextDiv>
            <Atoms.Text variant="resultHeader" text={titleText} />
            <Atoms.Text text={subText} mt="5px" />
        </TextDiv>
    </Container>
);

export default ResultItem;
