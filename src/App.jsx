import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import { BrowserRouter } from 'react-router-dom';
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import AppRoutes from './routes/AppRoutes';
import './App.css'


function App() {
  return (
    <BrowserRouter>
    <Header />
      <AppRoutes />
    <Footer />
    </BrowserRouter>
    
  );
}

export default App;