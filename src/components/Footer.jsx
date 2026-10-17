import { ArrowUp, Heart, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrapper">
      <div className="footer-inner">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.35rem' }}>
            <div style={{
              width: '28px',
              height: '28px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-violet))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontSize: '0.75rem',
              fontWeight: 700,
              fontFamily: 'var(--font-mono)'
            }}>
              NS
            </div>
            <strong style={{ color: '#fff', fontSize: '1.05rem' }}>{personalInfo.name}</strong>
          </div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>
            {personalInfo.degree} &bull; Final Year Portfolio
          </div>
        </div>

        <div className="footer-copyright">
          <span>Crafted with </span>
          <Heart size={14} color="#f43f5e" style={{ display: 'inline', verticalAlign: 'middle' }} />
          <span> using React, JavaScript, and Modern CSS. &copy; {new Date().getFullYear()}</span>
        </div>

        <button
          type="button"
          className="back-to-top-btn"
          onClick={scrollToTop}
          aria-label="Back to top"
          title="Scroll to top"
        >
          <ArrowUp size={18} />
        </button>
      </div>
    </footer>
  );
}

