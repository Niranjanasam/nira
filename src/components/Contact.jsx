import { useState } from 'react';
import { 
  Mail, 
  Send, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  MessageSquare,
  Copy,
  Check,
  Globe
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

function GithubIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowToast(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setShowToast(false), 5000);
    }, 1000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="section-container">
      <div className="section-tag">
        <MessageSquare size={15} />
        <span>Get in Touch</span>
      </div>

      <h2 className="section-heading">
        Let's Connect &amp; <span className="gradient-text">Collaborate</span>
      </h2>
      <p className="section-subheading">
        Whether you have an opportunity for a final year software engineer, questions about my ChildGuard platform,
        or simply want to talk tech—my inbox is always open!
      </p>

      <div className="contact-grid">
        {/* Left Side: Contact Information Cards */}
        <div className="glass-card contact-info-card">
          <div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#fff', marginBottom: '0.5rem' }}>
              Direct Channels
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>
              Feel free to connect directly via email or professional networks.
            </p>
          </div>

          {/* Email */}
          <div className="contact-method-row">
            <div className="contact-icon-box">
              <Mail size={22} />
            </div>
            <div style={{ flex: 1 }}>
              <div className="contact-method-title">Email Address</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <a 
                  href={`mailto:${personalInfo.socials.email}`} 
                  className="contact-method-value"
                >
                  {personalInfo.socials.email}
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: copiedEmail ? '#10b981' : 'var(--text-dim)',
                    cursor: 'pointer',
                    padding: '2px'
                  }}
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check size={16} /> : <Copy size={16} />}
                </button>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="contact-method-row">
            <div className="contact-icon-box" style={{ background: 'rgba(139, 92, 246, 0.12)', color: 'var(--accent-violet)', borderColor: 'rgba(139, 92, 246, 0.25)' }}>
              <MapPin size={22} />
            </div>
            <div>
              <div className="contact-method-title">Location</div>
              <div className="contact-method-value">{personalInfo.location}</div>
            </div>
          </div>

          {/* Social Profiles */}
          <div style={{ paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <div className="contact-method-title" style={{ marginBottom: '0.75rem' }}>Professional Profiles</div>
            <div style={{ display: 'flex', gap: '0.85rem' }}>
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
                style={{ padding: '0.55rem 1.1rem', fontSize: '0.85rem' }}
              >
                <GithubIcon size={16} />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
                style={{ padding: '0.55rem 1.1rem', fontSize: '0.85rem' }}
              >
                <LinkedinIcon size={16} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Status Badge */}
          <div style={{
            background: 'rgba(16, 185, 129, 0.1)',
            border: '1px solid rgba(16, 185, 129, 0.25)',
            borderRadius: 'var(--radius-md)',
            padding: '1rem',
            marginTop: 'auto'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#34d399', fontWeight: 600, fontSize: '0.85rem' }}>
              <Sparkles size={16} />
              <span>Available for Roles &amp; Internships</span>
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '4px' }}>
              Open to Software Engineering, Full-Stack Developer, and Frontend/Backend opportunities.
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Form */}
        <div className="glass-card contact-form-card">
          <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#fff', marginBottom: '0.5rem' }}>
            Send a Message
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '1.5rem' }}>
            Fill in the details below to send an inquiry or message directly.
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Your Name *</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="form-input"
                placeholder="e.g. Alex Johnson"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address *</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="form-input"
                placeholder="e.g. alex@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                className="form-input"
                placeholder="e.g. Opportunity Discussion / Project Feedback"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Message *</label>
              <textarea
                id="message"
                name="message"
                required
                className="form-textarea"
                placeholder="Write your thoughts, project inquiry, or invitation here..."
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="cursor-blink" />
                  <span>Transmitting Message...</span>
                </>
              ) : (
                <>
                  <Send size={16} />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Floating Toast Feedback */}
      {showToast && (
        <div className="toast-notification">
          <CheckCircle2 size={20} />
          <div>
            <div style={{ fontWeight: 700 }}>Message Transmitted!</div>
            <div style={{ fontSize: '0.8rem', opacity: 0.9 }}>
              Thank you for reaching out. Niranjana will review and reply promptly!
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
