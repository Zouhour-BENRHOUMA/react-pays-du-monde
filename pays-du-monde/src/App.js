import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Notfound from './pages/Notfound';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/*' element={<Notfound/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;