import React from "react";

import * as Molecules from '../../Molecules';

const ResultList = ({ searchedIten, data }) => (
    <>
        <h1>Results for: {searchedIten}</h1>
        {data.map((item) => {
            return (
                <Molecules.ResultItem titleText={item.title} subText={item.subTitle} />
            )
        })}
    </>
);

export default ResultList;
