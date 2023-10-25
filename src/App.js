import './style.css';
import NavBar from './components/NavBar';
import ContainerCardItems from './components/ContainerCardItems';
import DetailsItem from './components/DetailsItem';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path='/' element={ <ContainerCardItems />} />
            <Route path='/item/:idItem' element={ <DetailsItem />} />
            <Route path='/category/:idCategory' element={ <ContainerCardItems />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
