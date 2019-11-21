import React from 'react';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './styles/global';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <BrowserRouter>
    <Sidebar/>
      <Routes />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
