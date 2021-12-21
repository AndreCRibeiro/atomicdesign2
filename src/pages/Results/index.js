import React, { useContext } from "react";
import { StateContext } from "../../App";

import * as Templates from '../../components/Templates';

const ResultsPage = () => {
    const { state } = useContext(StateContext);
    return (
        <Templates.ResultsTemplate
            profileImage="https://avatars.githubusercontent.com/u/26776218?v=4"
            title={state.searchQuery}
        />
    );
};

export default ResultsPage;