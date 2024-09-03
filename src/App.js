import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
