import React from 'react';
import { Routes as Switch, Route } from "react-router-dom";

import SearchPage from '../pages/Home';
import ResultsPage from '../pages/Results';

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact element={<SearchPage />} />
            <Route path="/results" element={<ResultsPage />} />
        </Switch>
    );
};

export default Routes;
