import React, { useState, useEffect } from 'react';

const Navbar = ({ currentPage, setPage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Home', page: 'home' },
    { label: 'Services', page: 'services' },
    { label: 'Portfolio', page: 'portfolio' },
    { label: 'Contact', page: 'contact' },
  ];

  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem 2.5rem',
    background: scrolled ? 'rgba(10,10,15,0.97)' : 'rgba(10,10,15,0.6)',
    backdropFilter: 'blur(12px)',
    borderBottom: scrolled ? '0.5px solid rgba(255,255,255,0.08)' : '0.5px solid transparent',
    transition: 'all 0.3s ease',
  };

  return (
    <>
      <nav style={navStyle}>
        {/* Logo */}
        <div
          onClick={() => setPage('home')}
          style={{ fontSize: 20, fontWeight: 600, letterSpacing: '-0.5px', color: '#fff', cursor: 'pointer', userSelect: 'none' }}
        >
          Nova<span style={{ color: '#7c6af7' }}>Start</span>
        </div>

        {/* Desktop Links */}
        <ul className="nav-links" style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
          {links.map(link => (
            <li key={link.page}>
              <button
                onClick={() => setPage(link.page)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: 13,
                  color: currentPage === link.page ? '#fff' : 'rgba(255,255,255,0.5)',
                  cursor: 'pointer',
                  fontWeight: currentPage === link.page ? 500 : 400,
                  borderBottom: currentPage === link.page ? '1px solid #7c6af7' : '1px solid transparent',
                  paddingBottom: 2,
                  transition: 'color 0.2s',
                }}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          className="btn-primary"
          style={{ padding: '8px 20px', fontSize: 13 }}
          onClick={() => setPage('contact')}
        >
          Get Free Quote
        </button>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: '#fff',
            fontSize: 22,
            marginLeft: 8,
          }}
          className="hamburger"
          aria-label="Menu"
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{
          position: 'fixed',
          top: 60,
          left: 0,
          right: 0,
          background: 'rgba(10,10,15,0.98)',
          zIndex: 999,
          padding: '1rem 2rem',
          borderBottom: '0.5px solid rgba(255,255,255,0.08)',
        }}>
          {links.map(link => (
            <button
              key={link.page}
              onClick={() => { setPage(link.page); setMobileOpen(false); }}
              style={{
                display: 'block',
                width: '100%',
                background: 'none',
                border: 'none',
                color: currentPage === link.page ? '#7c6af7' : 'rgba(255,255,255,0.7)',
                fontSize: 15,
                padding: '12px 0',
                textAlign: 'left',
                cursor: 'pointer',
                borderBottom: '0.5px solid rgba(255,255,255,0.06)',
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 700px) {
          .nav-links { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
