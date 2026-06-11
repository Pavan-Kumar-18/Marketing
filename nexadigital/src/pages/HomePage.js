import React, { useEffect, useState } from 'react';
import { Helmet } from "react-helmet";

const services = [
  { icon: '💻', title: 'Website Development', desc: 'Custom, blazing-fast websites built with React, Next.js & Node.js. Fully responsive and CMS-ready.' },
  { icon: '🔍', title: 'SEO Optimisation', desc: 'Rank higher and get found faster. Technical SEO, on-page, backlinks and content strategy.' },
  { icon: '📣', title: 'Digital Marketing', desc: 'Performance campaigns across Google, Meta, and LinkedIn. Every rupee tracked and optimised.' },
  { icon: '📱', title: 'Social Media', desc: 'Content strategy, scheduling, and community management across all major platforms.' },
  { icon: '🎨', title: 'UI/UX Design', desc: 'Beautiful interfaces built for user delight. Wireframes, prototypes, and full design systems.' },
  { icon: '📧', title: 'Email Marketing', desc: 'Drip campaigns, newsletters and automated flows that nurture leads and drive repeat revenue.' },
];

const testimonials = [
  { name: 'Rahul Khanna', role: 'CEO, VentureBloom', initials: 'RK', color: '#7c6af7', bg: 'rgba(124,106,247,0.15)', text: '"Nova Start completely transformed our online presence. Our leads tripled within two months of launching the new site."' },
  { name: 'Sneha Patil', role: 'Founder, GreenLeaf Co.', initials: 'SP', color: '#1d9e75', bg: 'rgba(29,158,117,0.15)', text: '"We went from page 5 to position 1 for our most competitive keyword in under 90 days. The SEO work was phenomenal."' },
  { name: 'Arjun Mehta', role: 'Marketing Head, TechNova', initials: 'AM', color: '#d85a30', bg: 'rgba(216,90,48,0.15)', text: '"Professional, fast, and truly creative. They understood our brand instantly and delivered beyond expectations."' },
];

const stats = [
  { num: '200+', label: 'Projects Delivered' },
  { num: '98%', label: 'Client Satisfaction' },
  { num: '5x', label: 'Avg. ROI Achieved' },
  { num: '12+', label: 'Years Experience' },
];

const HomePage = ({ setPage }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setVisible(true), 50);
  }, []);

  const handleCTA = (e) => {
    e.preventDefault();
    if (email) { setSubmitted(true); }
  };

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
    
    <div style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.4s ease', paddingTop: 64 }}>

      {/* HERO */}
      <section style={{ padding: '6rem 2.5rem 5rem', maxWidth: 920, margin: '0 auto', textAlign: 'center' }}>
        <div style={{
          display: 'inline-block',
          background: 'rgba(124,106,247,0.12)',
          color: '#a99ef5',
          fontSize: 12,
          padding: '5px 16px',
          borderRadius: 20,
          border: '0.5px solid rgba(124,106,247,0.3)',
          marginBottom: '1.5rem',
          letterSpacing: '0.5px',
        }}>
          🚀 Trusted by 200+ brands worldwide
        </div>

        <h1 style={{
          fontSize: 'clamp(36px, 7vw, 68px)',
          fontWeight: 600,
          lineHeight: 1.08,
          letterSpacing: '-2.5px',
          color: '#fff',
          marginBottom: '1.25rem',
        }}>
          We Build Websites That{' '}
          <span style={{ color: '#7c6af7' }}>Convert</span>
          {' '}& Campaigns That{' '}
          <span style={{ color: '#7c6af7' }}>Grow</span>
        </h1>

        <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, maxWidth: 580, margin: '0 auto 2.5rem' }}>
          Full-service digital agency — from custom web development to SEO, social media, and performance marketing. One team, infinite possibilities.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="btn-primary" onClick={() => setPage('contact')}>Start Your Project →</button>
          <button className="btn-outline" onClick={() => setPage('portfolio')}>View Our Work</button>
        </div>
      </section>

      {/* STATS BAR */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
        borderTop: '0.5px solid rgba(255,255,255,0.06)',
        borderBottom: '0.5px solid rgba(255,255,255,0.06)',
      }}>
        {stats.map((s, i) => (
          <div key={i} style={{
            padding: '2rem 1.5rem',
            textAlign: 'center',
            borderRight: i < stats.length - 1 ? '0.5px solid rgba(255,255,255,0.06)' : 'none',
          }}>
            <div style={{ fontSize: 34, fontWeight: 600, color: '#fff' }}>{s.num}</div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginTop: 4 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* SERVICES PREVIEW */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '5rem 2.5rem' }}>
        <div className="eyebrow">What We Do</div>
        <div className="section-title">Everything your digital presence needs</div>
        <div className="section-sub">From pixel-perfect websites to data-driven marketing — we handle it all under one roof.</div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: 1, background: 'rgba(255,255,255,0.05)', border: '0.5px solid rgba(255,255,255,0.05)', borderRadius: 16, overflow: 'hidden' }}>
          {services.map((s, i) => (
            <div
              key={i}
              onClick={() => setPage('services')}
              style={{
                background: '#0f0f17',
                padding: '2rem',
                cursor: 'pointer',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#141420'}
              onMouseLeave={e => e.currentTarget.style.background = '#0f0f17'}
            >
              <div style={{ fontSize: 28, marginBottom: '1rem' }}>{s.icon}</div>
              <div style={{ fontSize: 15, fontWeight: 500, color: '#fff', marginBottom: '0.4rem' }}>{s.title}</div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}>{s.desc}</div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <button className="btn-outline" onClick={() => setPage('services')}>See All Services →</button>
        </div>
      </section>

      <hr className="divider" />

      {/* TESTIMONIALS */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '5rem 2.5rem' }}>
        <div className="eyebrow">Client Love</div>
        <div className="section-title">What our clients say</div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{
              background: '#0f0f17',
              border: '0.5px solid rgba(255,255,255,0.06)',
              borderRadius: 14,
              padding: '1.75rem',
            }}>
              <div style={{ color: '#f5c842', fontSize: 14, marginBottom: '0.75rem' }}>★★★★★</div>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: '1.25rem', fontStyle: 'italic' }}>{t.text}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 38, height: 38, borderRadius: '50%', background: t.bg, color: t.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 500 }}>{t.initials}</div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 500, color: '#fff' }}>{t.name}</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)' }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="divider" />

      {/* CTA SECTION */}
      <section style={{ padding: '5rem 2.5rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(26px, 4vw, 46px)', fontWeight: 600, color: '#fff', letterSpacing: '-1.5px', marginBottom: '1rem' }}>
          Ready to grow your business online?
        </h2>
        <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', marginBottom: '2rem' }}>
          Drop your email and we'll get back to you within 24 hours with a free strategy call.
        </p>
        {submitted ? (
          <div style={{ background: 'rgba(29,158,117,0.12)', border: '0.5px solid rgba(29,158,117,0.3)', borderRadius: 12, padding: '1rem 2rem', display: 'inline-block', color: '#5dcaa5', fontSize: 14 }}>
            ✓ Got it! We'll reach out to you within 24 hours.
          </div>
        ) : (
          <form onSubmit={handleCTA} style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap', maxWidth: 480, margin: '0 auto' }}>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              style={{
                flex: 1,
                minWidth: 200,
                padding: '12px 18px',
                background: 'rgba(255,255,255,0.05)',
                border: '0.5px solid rgba(255,255,255,0.15)',
                borderRadius: 24,
                color: '#fff',
                fontSize: 14,
                outline: 'none',
              }}
            />
            <button className="btn-primary" type="submit">Book Free Call</button>
          </form>
        )}
        <p style={{ marginTop: '1.25rem', fontSize: 13, color: 'rgba(255,255,255,0.3)' }}>
          Or email us directly:{' '}
          <a href="mailto:pavankumarpasupuleti09@gmail.com" style={{ color: '#7c6af7' }}>
            pavankumarpasupuleti09@gmail.com
          </a>
        </p>
      </section>
    </div>
    </>
  );
};

export default HomePage;
