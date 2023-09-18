import './App.css';
import { Routes, Route, Link,Switch, Router } from 'react-router-dom';
import ProductListing from './components/ProductListing';
import Header from './components/Header';
import Home from './components/Home';
import Wishlist from './components/Wishlist';
function App() {
  return (
    <div>
    
    <Routes>
    
        <Route path="/" element={<Home />} />
        <Route path="/ProductListing" element={<ProductListing/>} />
        <Route path="/wishlist" element={<Wishlist/>} />
        
        </Routes>
        </div>
  );
}

export default App;
