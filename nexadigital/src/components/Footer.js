import React from 'react';

const Footer = ({ setPage }) => {
  return (
    <>
    <Helmet>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-18230959839"
        />
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18230959839');
          `}
        </script>
      </Helmet>
    <footer style={{
      borderTop: '0.5px solid rgba(255,255,255,0.06)',
      padding: '3rem 2.5rem 2rem',
      maxWidth: '1100px',
      margin: '0 auto',
    }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2.5rem', marginBottom: '2.5rem' }}>
        {/* Brand */}
        <div>
          <div style={{ fontSize: 20, fontWeight: 600, color: '#fff', marginBottom: '0.75rem' }}>
            Nova<span style={{ color: '#7c6af7' }}>Start</span>
          </div>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, maxWidth: 220 }}>
            Full-service digital agency building websites and marketing campaigns that grow businesses.
          </p>
          <a
            href="mailto:pavankumarpasupuleti09@gmail.com"
            style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: '1rem', fontSize: 13, color: '#7c6af7', textDecoration: 'none' }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            pavankumarpasupuleti09@gmail.com
          </a>
          <a
            href="https://wa.me/918096728831"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: '0.6rem', fontSize: 13, color: '#25D366', textDecoration: 'none' }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            +91 80967 28831
          </a>
        </div>

        {/* Quick Links */}
        <div>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '1rem' }}>Pages</div>
          {[['Home','home'],['Services','services'],['Portfolio','portfolio'],['Contact','contact']].map(([label, page]) => (
            <button key={page} onClick={() => setPage(page)} style={{
              display: 'block', background: 'none', border: 'none',
              color: 'rgba(255,255,255,0.45)', fontSize: 13, padding: '4px 0',
              cursor: 'pointer', textAlign: 'left', transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color='#fff'}
            onMouseLeave={e => e.target.style.color='rgba(255,255,255,0.45)'}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Services */}
        <div>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '1rem' }}>Services</div>
          {['Website Development','SEO Optimisation','Digital Marketing','Social Media','UI/UX Design','Email Marketing'].map(s => (
            <div key={s} style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', padding: '4px 0' }}>{s}</div>
          ))}
        </div>

        {/* Location */}
        <div>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '1rem' }}>Location</div>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.8 }}>
            Bangalore, Karnataka<br />India — 560001
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: '1rem' }}>
            {[
              { label: 'LinkedIn', icon: 'in', href: '#' },
              { label: 'Twitter', icon: 'tw', href: '#' },
              { label: 'Instagram', icon: 'ig', href: '#' },
            ].map(s => (
              <a key={s.label} href={s.href} style={{
                width: 32, height: 32, borderRadius: '50%',
                background: 'rgba(255,255,255,0.06)',
                border: '0.5px solid rgba(255,255,255,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 11, color: 'rgba(255,255,255,0.5)',
                textDecoration: 'none', transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background='rgba(124,106,247,0.2)'}
              onMouseLeave={e => e.currentTarget.style.background='rgba(255,255,255,0.06)'}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: '0.5px solid rgba(255,255,255,0.06)',
        paddingTop: '1.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '0.5rem',
      }}>
        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)' }}>© 2025 NovaStart. All rights reserved.</div>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {['Privacy Policy','Terms of Service'].map(t => (
            <span key={t} style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', cursor: 'pointer' }}>{t}</span>
          ))}
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
