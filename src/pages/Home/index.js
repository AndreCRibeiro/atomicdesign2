import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { StateContext } from "../../App";

import * as Template from '../../components/Templates';

const HomePage = () => {
    const { state, setState } = useContext(StateContext);
    const navigate = useNavigate();
    return (
        <Template.HomeTemplate
            profileImage="https://avatars.githubusercontent.com/u/26776218?v=4"
            onSearch={val => {
                setState({ ...state, searchQuery: val });
                navigate('/results')
            }}
        />
    );
};

export default HomePage;