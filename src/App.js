import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './styles/global';

import Routes from './routes';

export const StateContext = React.createContext();


function App() {
  const [state, setState] = useState({
    searchQuery: "",
  });
  return (
    <StateContext.Provider value={{ state, setState }}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </StateContext.Provider>
  );
}

export default App;
