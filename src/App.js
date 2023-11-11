import './style.css';
import NavBar from './components/NavBar';
import ContainerCardItems from './components/ContainerCardItems';
import DetailsItem from './components/DetailsItem';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createContext, useState } from 'react';
import ProviderContextoListCart from './components/ProviderContextoListCart';

function App() {
  return (
    <ProviderContextoListCart>
      <BrowserRouter>
          <NavBar />
            <Routes>
              <Route path='/' element={ <ContainerCardItems />} />
              <Route path='/item/:idItem' element={ <DetailsItem />} />
              <Route path='/category/:idCategory' element={ <ContainerCardItems />} />
            </Routes>
        </BrowserRouter>
    </ProviderContextoListCart>    
  );
}

export default App;
