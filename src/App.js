import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Cart from './pages/Cart'
import Product from './pages/ProductDetail'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path ="/cart" element ={<Cart/>} />
        <Route path='/product/:id' element={<Product/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
