import { useState } from 'react'
import './styles/navbar.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import Contact from './pages/Contact';


import './App.css';



function App() {
  

  return (
   
   <div>
<Navbar/>
<main>
  <Routes>
  <Route path="/" element={<Home/>}/>
    {/* <Route path="/shop" element={<Shop/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/cart" element={<Cart/>} /> */}
    <Route path="/profile" element={<Profile/>} />
    {/* <Route path="/contact" element={<Contact/>} /> */}

   
  </Routes>
</main>


<Footer/>
   </div>
     
     
     )
}

export default App
