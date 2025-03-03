import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import "./fonts.css"
import HomePage from './pages/HomePage';
import ProductPage from './pages/Product';
import CollectionPage from './pages/Collections';
import CartPage from './pages/Cart';
import OrderSuccess from './pages/OrderSuccess';
import SearchPage from './pages/Search';
import ContactPage from './pages/Contact';
import TermsAndConditions from './pages/Terms&Conditions';
import Shipping from './pages/Shipping';
import Returns from './pages/Returns';
import PrivacyPolicy from './pages/PrivacyPolicy';
import GiftCards from './pages/GiftCards';
import CharitableInitiatives from './pages/CharitableInitiatives';
import Faqs from './pages/FAQs';
import About from './pages/About';
import OrderPlacementPage from './pages/OrderPlacing'
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/collections" element={<CollectionPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/order-place" element={<OrderPlacementPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/returns" element={<Returns />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/gift-cards" element={<GiftCards />} />
        <Route path="/charitable-initiatives" element={<CharitableInitiatives />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
