import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './pages/Home';
import SobreNos from './pages/SobreNos'
import Restaurante from './pages/Restaurante'
import Menu from './pages/Menu'
import Reserva from './pages/Reserva'
import Contato from './pages/Contato'

function App() {
  return (
    <Router>
      
      <header>
      <NavBar />
      </header>

      <Routes>
          <Route path = "/" element={ <Home /> } />
          <Route path = "/sobre-nos" element={ <SobreNos /> } />
          <Route path = "/restaurante" element={ <Restaurante /> } />
          <Route path = "/menu" element={ <Menu /> }/>
          <Route path = "/reserva" element={ <Reserva /> }/>
          <Route path = "/contato" element={ <Contato /> }/>
        </Routes>

    </Router>
  );
}

export default App;
