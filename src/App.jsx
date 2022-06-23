import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/layout/NavBar';
import Contato from './pages/Contato';
import Empresa from './pages/Empresa';
import Home from './pages/Home';
import Footer from './components/layout/Footer';


function App() {
  
  return (
   <Router>
    <NavBar/>
    <Routes>
      <Route exact path='/' element ={<Home/>}/>
      <Route exact path='/contato' element ={<Contato/>}/>
      <Route exact path='/empresa' element ={<Empresa/>}/>
    </Routes>
    <Footer/>
   </Router>
  );
}

export default App;
