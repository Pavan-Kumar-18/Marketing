import React, { useEffect, useState } from 'react';

const faqs = [
  { q: 'How long does a website take to build?', a: 'A standard 5-10 page website takes 2-4 weeks. Complex web apps or e-commerce platforms typically take 6-12 weeks depending on scope.' },
  { q: 'Do you offer monthly marketing retainers?', a: 'Yes! We offer monthly SEO, social media, and paid ads management packages. Pricing starts at ₹15,000/month depending on scope.' },
  { q: 'What information do you need to get started?', a: 'A brief about your business, your goals, any brand assets (logo, colors), and examples of sites you like. We will handle the rest.' },
  { q: 'Do you work with startups?', a: 'Absolutely. We love working with early-stage startups and have special bundled packages to help you launch fast without breaking the bank.' },
  { q: 'How do we track results?', a: 'Every project gets a custom analytics dashboard. We send monthly reports with clear KPIs — traffic, leads, conversions, and ROI.' },
];

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', budget: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setVisible(true), 50);
  }, []);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    background: 'rgba(255,255,255,0.04)',
    border: '0.5px solid rgba(255,255,255,0.12)',
    borderRadius: 10,
    color: '#fff',
    fontSize: 14,
    outline: 'none',
    transition: 'border-color 0.2s',
    fontFamily: 'inherit',
  };

  const labelStyle = {
    display: 'block',
    fontSize: 12,
    color: 'rgba(255,255,255,0.45)',
    marginBottom: '0.4rem',
    letterSpacing: '0.3px',
  };

  return (
    <div style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.4s ease', paddingTop: 64 }}>

      {/* HEADER */}
      <section style={{ padding: '5rem 2.5rem 3rem', maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
        <div className="eyebrow">Get In Touch</div>
        <h1 className="section-title" style={{ textAlign: 'center' }}>Let's build something great together</h1>
        <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, maxWidth: 500, margin: '0 auto' }}>
          Tell us about your project. We'll get back to you within 24 hours with a custom plan and quote.
        </p>
      </section>

      {/* MAIN CONTENT */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2.5rem 5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>

        {/* LEFT — CONTACT INFO */}
        <div>
          <div style={{ fontSize: 16, fontWeight: 500, color: '#fff', marginBottom: '1.5rem' }}>Contact Details</div>

          {/* Email */}
          <a href="mailto:pavankumarpasupuleti09@gmail.com" style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: '1.5rem', textDecoration: 'none', padding: '1.25rem', background: '#0f0f17', border: '0.5px solid rgba(255,255,255,0.07)', borderRadius: 14, transition: 'border-color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(124,106,247,0.4)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'}
          >
            <div style={{ width: 40, height: 40, background: 'rgba(124,106,247,0.12)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7c6af7" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </div>
            <div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginBottom: 3 }}>Email Us</div>
              <div style={{ fontSize: 13, color: '#a99ef5', wordBreak: 'break-all' }}>pavankumarpasupuleti09@gmail.com</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', marginTop: 3 }}>We reply within 24 hours</div>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/918096728831?text=Hi%20NovaStart%21%20I%27d%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: '1.5rem', textDecoration: 'none', padding: '1.25rem', background: '#0f0f17', border: '0.5px solid rgba(255,255,255,0.07)', borderRadius: 14, transition: 'border-color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(37,211,102,0.4)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'}
          >
            <div style={{ width: 40, height: 40, background: 'rgba(37,211,102,0.1)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            <div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginBottom: 3 }}>WhatsApp</div>
              <div style={{ fontSize: 13, color: '#25D366' }}>+91 80967 28831</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', marginTop: 3 }}>Chat with us instantly</div>
            </div>
          </a>

          {/* Location */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: '2.5rem', padding: '1.25rem', background: '#0f0f17', border: '0.5px solid rgba(255,255,255,0.07)', borderRadius: 14 }}>
            <div style={{ width: 40, height: 40, background: 'rgba(239,159,39,0.1)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ef9f27" strokeWidth="2">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginBottom: 3 }}>Location</div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)' }}>Bangalore, Karnataka</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', marginTop: 3 }}>India — We work with clients globally</div>
            </div>
          </div>

          {/* FAQ */}
          <div style={{ fontSize: 15, fontWeight: 500, color: '#fff', marginBottom: '1rem' }}>Frequently Asked</div>
          {faqs.map((faq, i) => (
            <div key={i} style={{ borderBottom: '0.5px solid rgba(255,255,255,0.06)', paddingBottom: '0.75rem', marginBottom: '0.75rem' }}>
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{ background: 'none', border: 'none', color: '#fff', fontSize: 13, cursor: 'pointer', textAlign: 'left', display: 'flex', justifyContent: 'space-between', width: '100%', fontFamily: 'inherit', paddingBottom: openFaq === i ? '0.5rem' : 0 }}
              >
                <span style={{ flex: 1, lineHeight: 1.5 }}>{faq.q}</span>
                <span style={{ color: '#7c6af7', marginLeft: 12, flexShrink: 0, fontSize: 16 }}>{openFaq === i ? '−' : '+'}</span>
              </button>
              {openFaq === i && (
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, marginTop: 4 }}>{faq.a}</p>
              )}
            </div>
          ))}
        </div>

        {/* RIGHT — FORM */}
        <div style={{ background: '#0f0f17', border: '0.5px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: '2rem' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
              <div style={{ fontSize: 48, marginBottom: '1rem' }}>🎉</div>
              <div style={{ fontSize: 20, fontWeight: 500, color: '#fff', marginBottom: '0.75rem' }}>Message Received!</div>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Thanks for reaching out. We'll review your project details and get back to you within 24 hours at{' '}
                <span style={{ color: '#7c6af7' }}>{form.email || 'your email'}</span>.
              </p>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)' }}>
                Need a faster response?{' '}
                <a href="https://wa.me/918096728831" target="_blank" rel="noopener noreferrer" style={{ color: '#25D366' }}>
                  WhatsApp us directly
                </a>
              </p>
            </div>
          ) : (
            <>
              <div style={{ fontSize: 16, fontWeight: 500, color: '#fff', marginBottom: '1.5rem' }}>Send Us a Message</div>

              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
                  <div>
                    <label style={labelStyle}>Your Name *</label>
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Ravi Kumar" required style={inputStyle}
                      onFocus={e => e.target.style.borderColor = 'rgba(124,106,247,0.5)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Phone Number</label>
                    <input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" style={inputStyle}
                      onFocus={e => e.target.style.borderColor = 'rgba(124,106,247,0.5)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: 12 }}>
                  <label style={labelStyle}>Email Address *</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@company.com" required style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'rgba(124,106,247,0.5)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
                  <div>
                    <label style={labelStyle}>Service Needed</label>
                    <select name="service" value={form.service} onChange={handleChange} style={{ ...inputStyle, appearance: 'none' }}>
                      <option value="">Select service</option>
                      <option>Website Development</option>
                      <option>SEO Optimisation</option>
                      <option>Digital Marketing</option>
                      <option>Social Media</option>
                      <option>UI/UX Design</option>
                      <option>Email Marketing</option>
                      <option>Full Package</option>
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Budget Range</label>
                    <select name="budget" value={form.budget} onChange={handleChange} style={{ ...inputStyle, appearance: 'none' }}>
                      <option value="">Select budget</option>
                      <option>Under ₹25,000</option>
                      <option>₹25,000 – ₹50,000</option>
                      <option>₹50,000 – ₹1,00,000</option>
                      <option>₹1,00,000+</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label style={labelStyle}>Tell us about your project *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your project, goals, timeline, or anything else we should know..."
                    required
                    rows={5}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: 120, lineHeight: 1.6 }}
                    onFocus={e => e.target.style.borderColor = 'rgba(124,106,247,0.5)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
                  />
                </div>

                <button className="btn-primary" type="submit" style={{ width: '100%', padding: '13px 0', fontSize: 14 }}>
                  Send Message →
                </button>

                <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', textAlign: 'center', marginTop: '1rem' }}>
                  Or reach us at{' '}
                  <a href="mailto:pavankumarpasupuleti09@gmail.com" style={{ color: 'rgba(124,106,247,0.7)' }}>
                    pavankumarpasupuleti09@gmail.com
                  </a>
                </p>
              </form>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
