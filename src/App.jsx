import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import { Routes, Route } from "react-router-dom";
import Shop from './components/Shop/Shop';
import { useState, useEffect } from 'react';
import About from './About/About';


function App() {
  const [electronics, setElectronics] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/elecronics")
      .then((res) => res.json())
      .then((data) => setElectronics(data))

  }, [])
  const addToCart = (item) => {
    setElectronics([...electronics, item])
  }
  return (
    <>
      <Header electronics={electronics} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop electronics={electronics} addToCart={addToCart} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
