import './style.css';
import NavBar from './components/NavBar';
import ContainerCardItems from './components/ContainerCardItems';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path='/' element={ <ContainerCardItems />} />
            <Route path='/item/:idItem' element={ <ContainerCardItems />} />
            <Route path='/category/:idCategory' element={ <ContainerCardItems />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
