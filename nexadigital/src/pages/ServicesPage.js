import React, { useEffect, useState } from 'react';
import { Helmet } from "react-helmet";

const services = [
  {
    icon: '💻',
    title: 'Website Development',
    desc: 'Custom, blazing-fast websites and web apps built with the latest technology stack. From simple landing pages to complex multi-tier platforms.',
    features: ['React / Next.js development', 'Node.js & REST APIs', 'CMS integration (WordPress, Strapi)', 'Mobile-first responsive design', 'Performance & Core Web Vitals', 'SSL, hosting & deployment'],
    tags: ['React', 'Next.js', 'Node.js', 'MongoDB'],
    color: '#7c6af7',
  },
  {
    icon: '🔍',
    title: 'SEO Optimisation',
    desc: 'Data-driven SEO strategies that get you ranking on page 1 and keep you there. We combine technical excellence with content strategy.',
    features: ['Technical SEO audit & fixes', 'On-page optimisation', 'Keyword research & mapping', 'Link building campaigns', 'Core Web Vitals optimisation', 'Monthly ranking reports'],
    tags: ['On-Page SEO', 'Technical', 'Backlinks', 'Analytics'],
    color: '#1d9e75',
  },
  {
    icon: '📣',
    title: 'Digital Marketing',
    desc: 'Performance-focused paid advertising across Google, Meta, and LinkedIn. We manage every rupee to maximise your ROI.',
    features: ['Google Ads (Search + Display)', 'Meta Ads (Facebook + Instagram)', 'LinkedIn B2B campaigns', 'Retargeting & lookalike audiences', 'Conversion rate optimisation', 'Weekly performance dashboards'],
    tags: ['Google Ads', 'Meta Ads', 'LinkedIn', 'Analytics'],
    color: '#d85a30',
  },
  {
    icon: '📱',
    title: 'Social Media Marketing',
    desc: 'Build a loyal following and drive engagement with a consistent, on-brand social media presence across all platforms.',
    features: ['Platform strategy & content calendar', 'Graphic design & copywriting', 'Story & reel production', 'Community management', 'Influencer outreach', 'Monthly analytics reports'],
    tags: ['Instagram', 'LinkedIn', 'YouTube', 'Content'],
    color: '#a99ef5',
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    desc: 'Beautiful, intuitive interfaces that users love. From wireframes to polished design systems — we craft experiences that convert.',
    features: ['User research & personas', 'Information architecture', 'Wireframing & prototyping', 'High-fidelity UI design in Figma', 'Design system creation', 'Usability testing'],
    tags: ['Figma', 'Prototyping', 'Design System', 'Research'],
    color: '#ef9f27',
  },
  {
    icon: '📧',
    title: 'Email Marketing',
    desc: 'Automated email flows that nurture leads, onboard customers, and drive repeat revenue — all on autopilot.',
    features: ['Email strategy & segmentation', 'Drip campaign design', 'Welcome & onboarding flows', 'Newsletter design & writing', 'A/B testing & optimisation', 'Deliverability management'],
    tags: ['Automation', 'Campaigns', 'A/B Testing', 'Analytics'],
    color: '#5dcaa5',
  },
];

const process = [
  { num: '01', title: 'Discover', desc: 'We deep-dive into your business, audience, and competitors to build a rock-solid strategy.' },
  { num: '02', title: 'Design', desc: 'Wireframes, moodboards, and high-fidelity mockups — all signed off before a line of code is written.' },
  { num: '03', title: 'Build', desc: 'Clean, scalable code with weekly demos so you see progress at every step.' },
  { num: '04', title: 'Launch & Grow', desc: 'Post-launch SEO, campaigns, and monthly reporting to ensure continuous growth.' },
];

const ServicesPage = ({ setPage }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setVisible(true), 50);
  }, []);

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

      {/* PAGE HEADER */}
      <section style={{ padding: '5rem 2.5rem 3rem', maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
        <div className="eyebrow">Our Services</div>
        <h1 className="section-title" style={{ textAlign: 'center' }}>
          Everything your digital presence needs
        </h1>
        <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, maxWidth: 540, margin: '0 auto' }}>
          We offer end-to-end digital services — strategy, design, development, and marketing — all under one roof.
        </p>
      </section>

      {/* SERVICES GRID */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2.5rem 5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1rem' }}>
          {services.map((s, i) => (
            <div key={i} style={{
              background: '#0f0f17',
              border: '0.5px solid rgba(255,255,255,0.07)',
              borderRadius: 16,
              padding: '2rem',
              transition: 'border-color 0.2s, transform 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = `${s.color}40`; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: '1.25rem' }}>
                <div style={{ fontSize: 32, lineHeight: 1 }}>{s.icon}</div>
                <div>
                  <div style={{ fontSize: 16, fontWeight: 500, color: '#fff', marginBottom: 4 }}>{s.title}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                    {s.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                  </div>
                </div>
              </div>

              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: '1.25rem' }}>{s.desc}</p>

              {/* Features */}
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                {s.features.map((f, fi) => (
                  <li key={fi} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'rgba(255,255,255,0.55)', padding: '4px 0' }}>
                    <span style={{ color: s.color, fontSize: 16, flexShrink: 0 }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className="btn-outline"
                style={{ marginTop: '1.5rem', width: '100%', fontSize: 13, padding: '9px 0' }}
                onClick={() => setPage('contact')}
              >
                Get a Quote
              </button>
            </div>
          ))}
        </div>
      </section>

      <hr className="divider" />

      {/* PROCESS */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '5rem 2.5rem' }}>
        <div className="eyebrow">How We Work</div>
        <div className="section-title">Our process, step by step</div>
        <div className="section-sub">A clear, collaborative workflow that keeps you in control at every stage.</div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
          {process.map((p, i) => (
            <div key={i} style={{ paddingLeft: '1.25rem', borderLeft: '1px solid rgba(124,106,247,0.25)' }}>
              <div style={{ fontSize: 11, color: '#7c6af7', letterSpacing: '1.5px', marginBottom: '0.5rem' }}>{p.num} — {p.title.toUpperCase()}</div>
              <div style={{ fontSize: 15, fontWeight: 500, color: '#fff', marginBottom: '0.4rem' }}>{p.title}</div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7 }}>{p.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <hr className="divider" />

      {/* PRICING */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '5rem 2.5rem' }}>
        <div className="eyebrow">Pricing</div>
        <div className="section-title">Transparent plans, no surprises</div>
        <div className="section-sub">Pick a plan or get a custom quote tailored to your exact needs.</div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
          {[
            {
              name: 'Starter', price: '₹25,000', unit: '/ project', popular: false,
              desc: 'Great for small businesses getting online for the first time.',
              features: ['5-page responsive website', 'Basic SEO setup', 'Contact form integration', 'Mobile-optimised design', '1 month support'],
            },
            {
              name: 'Growth', price: '₹65,000', unit: '/ project', popular: true,
              desc: 'For growing brands that need a full digital setup and marketing.',
              features: ['15-page custom website', 'Full SEO optimisation', 'Google + Meta Ads setup', 'Social media strategy', '2 months of management', '3 months support'],
            },
            {
              name: 'Enterprise', price: 'Custom', unit: 'pricing', popular: false,
              desc: 'Full-scale digital transformation for established businesses.',
              features: ['Custom web application', 'Dedicated account manager', 'Full marketing retainer', 'Monthly reporting', 'Priority 24/7 support', 'Quarterly strategy reviews'],
            },
          ].map((plan, i) => (
            <div key={i} style={{
              background: plan.popular ? 'rgba(124,106,247,0.06)' : '#0f0f17',
              border: plan.popular ? '1px solid rgba(124,106,247,0.5)' : '0.5px solid rgba(255,255,255,0.08)',
              borderRadius: 16,
              padding: '1.75rem',
              position: 'relative',
            }}>
              {plan.popular && (
                <div style={{
                  position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)',
                  background: '#7c6af7', color: '#fff', fontSize: 11, padding: '3px 14px',
                  borderRadius: 10, whiteSpace: 'nowrap', fontWeight: 500,
                }}>Most Popular</div>
              )}
              <div style={{ fontSize: 18, fontWeight: 500, color: '#fff', marginBottom: '0.2rem' }}>{plan.name}</div>
              <div style={{ fontSize: 34, fontWeight: 600, color: '#fff', margin: '0.75rem 0 0.2rem' }}>
                {plan.price} <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', fontWeight: 400 }}>{plan.unit}</span>
              </div>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginBottom: '1.5rem', lineHeight: 1.6 }}>{plan.desc}</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {plan.features.map((f, fi) => (
                  <li key={fi} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'rgba(255,255,255,0.55)', padding: '4px 0' }}>
                    <span style={{ color: '#7c6af7' }}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <button
                className={plan.popular ? 'btn-primary' : 'btn-outline'}
                style={{ width: '100%', marginTop: '1.5rem', padding: '10px 0', fontSize: 13 }}
                onClick={() => setPage('contact')}
              >
                {plan.name === 'Enterprise' ? 'Contact Us' : 'Get Started'}
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
    </>
  );
};

export default ServicesPage;
