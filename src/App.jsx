import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from '../src/components/Header/Header.jsx'
import Projects from './pages/Projects/Projects';
import TheStack from './pages/The-stack/The-stack';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/the_stack' element={<TheStack />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      

    </>
  )
}

export default App