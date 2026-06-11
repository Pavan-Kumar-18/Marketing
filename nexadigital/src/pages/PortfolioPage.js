import React, { useEffect, useState } from 'react';
import { Helmet } from "react-helmet";

const projects = [
  {
    category: 'E-Commerce + SEO',
    name: 'ShopVista Redesign',
    desc: 'Full redesign and SEO overhaul for a mid-size e-commerce brand. Rebuilt on Next.js for performance and implemented a 6-month content strategy.',
    result: '3x organic traffic growth in 6 months',
    tags: ['Next.js', 'SEO', 'UI/UX'],
    stat1: { label: 'Traffic growth', val: '+300%' },
    stat2: { label: 'Bounce rate drop', val: '-42%' },
    color: '#7c6af7',
    bgAccent: 'rgba(124,106,247,0.08)',
  },
  {
    category: 'Healthcare + Digital Ads',
    name: 'MediCare Online',
    desc: 'Restructured a bloated Google Ads account for a multi-specialty clinic, cutting wasteful spend and focusing on high-intent search terms.',
    result: '60% reduction in cost-per-lead',
    tags: ['Google Ads', 'CRO', 'Landing Pages'],
    stat1: { label: 'Cost per lead', val: '-60%' },
    stat2: { label: 'Conversion rate', val: '+88%' },
    color: '#1d9e75',
    bgAccent: 'rgba(29,158,117,0.08)',
  },
  {
    category: 'EdTech + Social Media',
    name: 'LearnHub Platform',
    desc: 'Built a full-stack learning platform from scratch, and ran a 4-month social media campaign to grow their brand from zero to a loyal following.',
    result: '40K Instagram followers in 4 months',
    tags: ['React', 'Node.js', 'Social Media'],
    stat1: { label: 'Instagram followers', val: '40K' },
    stat2: { label: 'Course enrollments', val: '+210%' },
    color: '#d85a30',
    bgAccent: 'rgba(216,90,48,0.08)',
  },
  {
    category: 'Real Estate + Website',
    name: 'PrimeProp Listings',
    desc: 'Property portal with advanced search filters, map integrations, and an admin panel for agents. Full SEO strategy included for local search dominance.',
    result: '#1 local search ranking in 3 cities',
    tags: ['React', 'Maps API', 'SEO'],
    stat1: { label: 'Local search rank', val: '#1' },
    stat2: { label: 'Enquiries/month', val: '+320%' },
    color: '#ef9f27',
    bgAccent: 'rgba(239,159,39,0.08)',
  },
  {
    category: 'SaaS + Email Marketing',
    name: 'FlowDesk CRM',
    desc: 'Designed and built an onboarding email sequence and in-app retention campaigns for a B2B SaaS tool. Significant improvement in 30-day retention.',
    result: '38% improvement in 30-day retention',
    tags: ['Email Automation', 'Copywriting', 'Analytics'],
    stat1: { label: '30-day retention', val: '+38%' },
    stat2: { label: 'Email open rate', val: '52%' },
    color: '#a99ef5',
    bgAccent: 'rgba(169,158,245,0.08)',
  },
  {
    category: 'Fashion + Brand + Social',
    name: 'Velura Fashion',
    desc: 'Complete brand identity, social media setup, and Meta Ads strategy for a DTC fashion brand launching in India. Achieved profitability in month 2.',
    result: '4.2x ROAS on Meta Ads',
    tags: ['Meta Ads', 'Branding', 'Content'],
    stat1: { label: 'ROAS', val: '4.2x' },
    stat2: { label: 'Launch month sales', val: '₹8.2L' },
    color: '#5dcaa5',
    bgAccent: 'rgba(93,202,165,0.08)',
  },
];

const filters = ['All', 'Website Dev', 'SEO', 'Digital Ads', 'Social Media', 'Email Marketing'];

const PortfolioPage = ({ setPage }) => {
  const [active, setActive] = useState('All');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setVisible(true), 50);
  }, []);

  const filtered = active === 'All' ? projects : projects.filter(p =>
    p.tags.some(t => t.toLowerCase().includes(active.toLowerCase().split(' ')[0]))
    || p.category.toLowerCase().includes(active.toLowerCase().split(' ')[0])
  );

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

      {/* HEADER */}
      <section style={{ padding: '5rem 2.5rem 3rem', maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
        <div className="eyebrow">Our Work</div>
        <h1 className="section-title" style={{ textAlign: 'center' }}>Projects we're proud of</h1>
        <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, maxWidth: 500, margin: '0 auto' }}>
          A snapshot of recent work across industries — each with real, measurable results.
        </p>
      </section>

      {/* FILTERS */}
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center', padding: '0 2.5rem 2.5rem' }}>
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setActive(f)}
            style={{
              background: active === f ? '#7c6af7' : 'rgba(255,255,255,0.05)',
              color: active === f ? '#fff' : 'rgba(255,255,255,0.55)',
              border: active === f ? 'none' : '0.5px solid rgba(255,255,255,0.1)',
              padding: '7px 16px',
              borderRadius: 20,
              fontSize: 13,
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* PROJECTS GRID */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2.5rem 5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1rem' }}>
          {filtered.map((p, i) => (
            <div key={i} style={{
              background: '#0f0f17',
              border: '0.5px solid rgba(255,255,255,0.07)',
              borderRadius: 16,
              overflow: 'hidden',
              transition: 'transform 0.2s, border-color 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.borderColor = `${p.color}40`; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; }}
            >
              {/* Thumb */}
              <div style={{
                height: 140,
                background: p.bgAccent,
                borderBottom: `1px solid ${p.color}20`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: p.color, letterSpacing: 1, textTransform: 'uppercase', opacity: 0.6 }}>{p.category}</div>
                {/* Decorative circles */}
                <div style={{ position: 'absolute', right: -20, top: -20, width: 100, height: 100, borderRadius: '50%', background: `${p.color}08` }} />
                <div style={{ position: 'absolute', right: 20, bottom: -30, width: 70, height: 70, borderRadius: '50%', background: `${p.color}06` }} />
              </div>

              <div style={{ padding: '1.5rem' }}>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '0.4rem' }}>{p.category}</div>
                <div style={{ fontSize: 17, fontWeight: 500, color: '#fff', marginBottom: '0.5rem' }}>{p.name}</div>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, marginBottom: '1.25rem' }}>{p.desc}</p>

                {/* Result highlight */}
                <div style={{ background: `${p.color}12`, border: `0.5px solid ${p.color}30`, borderRadius: 8, padding: '0.6rem 0.9rem', marginBottom: '1rem', fontSize: 13, color: p.color }}>
                  ✦ {p.result}
                </div>

                {/* Stats */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: '1rem' }}>
                  {[p.stat1, p.stat2].map((s, si) => (
                    <div key={si} style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 8, padding: '0.6rem 0.75rem', textAlign: 'center' }}>
                      <div style={{ fontSize: 18, fontWeight: 600, color: '#fff' }}>{s.val}</div>
                      <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)' }}>{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="divider" />

      {/* CTA */}
      <section style={{ padding: '5rem 2.5rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 40px)', fontWeight: 600, color: '#fff', letterSpacing: '-1px', marginBottom: '1rem' }}>
          Want results like these for your business?
        </h2>
        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', marginBottom: '2rem' }}>
          Let's talk about your project and what we can achieve together.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="btn-primary" onClick={() => setPage('contact')}>Start a Project →</button>
          <a
            href="https://wa.me/918096728831?text=Hi%20Novastart%21%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: '#25D366', color: '#fff', border: 'none',
              padding: '12px 24px', borderRadius: 24, fontSize: 14, fontWeight: 500, textDecoration: 'none',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp Us
          </a>
        </div>
      </section>
    </div>
     </>
  );
};

export default PortfolioPage;
