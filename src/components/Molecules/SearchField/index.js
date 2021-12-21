import React from "react";

import * as Atoms from '../../Atoms';

const SearchField = ({ value, onChange, onSearch }) => (
    <>
        <Atoms.Input placeholder="Digite aqui para pesquisar..." value={value} onChange={onChange} />
        <Atoms.Button text="Pesquisar" mt="30px" onClick={onSearch} />
    </>
);

export default SearchField;
