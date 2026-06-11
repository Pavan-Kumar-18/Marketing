import React, { useState } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [page, setPage] = useState('home');

  const renderPage = () => {
    switch (page) {
      case 'home':      return <HomePage setPage={setPage} />;
      case 'services':  return <ServicesPage setPage={setPage} />;
      case 'portfolio': return <PortfolioPage setPage={setPage} />;
      case 'contact':   return <ContactPage />;
      default:          return <HomePage setPage={setPage} />;
    }
  };

  return (
    <div style={{ background: '#0a0a0f', minHeight: '100vh' }}>
      <Navbar currentPage={page} setPage={setPage} />

      <main>
        {renderPage()}
      </main>

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <hr style={{ border: 'none', borderTop: '0.5px solid rgba(255,255,255,0.06)' }} />
      </div>

      <Footer setPage={setPage} />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
