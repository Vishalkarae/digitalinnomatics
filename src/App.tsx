import './App.css'
import Header from './components/resources/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/screens/Home';
import Aboutus from './components/screens/Aboutus';
import Services from './components/screens/Services';

function App() {
 
  return (
    <Router>
      <Header/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/services" element={<Services />} />
        </Routes>
    </Router>
  )
  
}

export default App
