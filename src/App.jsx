import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/Navbar';
import Homepage from './pages/Homepage';

function App() {
  const footerinfo = {
    nombre: '© Kruger Corp. 2022. Transforming Enterprises, Boosting Lives.',
   };
  return (
    <div className="container">
    <Router>
      <div className='nav-tittle'>
      <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      <Footer {...footerinfo} />
    </Router>

  </div>
  );
}

export default App;
