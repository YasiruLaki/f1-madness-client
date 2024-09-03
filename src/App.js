import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/Product';
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
