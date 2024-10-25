import React from 'react';
import { Cross, Moon } from 'lucide-react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ChristianPage from './pages/ChristianPage';
import HinduPage from './pages/HinduPage';
import IslamicPage from './pages/IslamicPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/christian" element={<ChristianPage />} />
        <Route path="/hindu" element={<HinduPage />} />
        <Route path="/islamic" element={<IslamicPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;