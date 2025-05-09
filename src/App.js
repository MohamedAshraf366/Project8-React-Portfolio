import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Connect from './components/connect';
import Home from './components/home';
import Skills from './components/skills';
import Projects from './components/projects';
import Footer from './components/footer';
import AutoPlay from './components/skills';

function App() {
  return (
    <BrowserRouter basename='Project8-React-Portfolio'>
    <Header />
    <Home />
    <Skills />
    <Projects />
    <Connect />
    <Footer />
    <Routes>
      
      <Route path='/skills' element = {<Skills />} />
      <Route path='/projects' element = {<Projects />} />
      <Route path='/connect' element = {<Connect />} />
      
      
    </Routes>
    </BrowserRouter>
    
    
    
  );
}

export default App;



