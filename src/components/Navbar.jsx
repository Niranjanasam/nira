import { useState, useEffect } from 'react';
import { Menu, X, Code2, Sparkles, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#hero', id: 'hero' },
    { label: 'About & Education', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-wrapper ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-inner">
        <a href="#hero" className="nav-brand" onClick={(e) => handleLinkClick(e, '#hero')}>
          <div className="nav-brand-logo">
            <span>NS</span>
          </div>
          <div className="nav-brand-text">
            <span className="nav-brand-name">{personalInfo.name}</span>
            <span className="nav-brand-sub">B.E. CSE • Final Year</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav>
          <ul className="nav-links-desktop">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={(e) => handleLinkClick(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Buttons */}
        <div className="nav-actions">
          <button 
            type="button" 
            className="btn-secondary" 
            style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
            onClick={onOpenResume}
          >
            <FileText size={15} />
            <span>Resume</span>
          </button>

          <a
            href="#contact"
            className="btn-primary"
            style={{ padding: '0.5rem 1.15rem', fontSize: '0.85rem' }}
            onClick={(e) => handleLinkClick(e, '#contact')}
          >
            <Sparkles size={15} />
            <span>Hire Me</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-drawer-links">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className="mobile-drawer-link"
                onClick={(e) => handleLinkClick(e, item.href)}
              >
                <span>{item.label}</span>
                <Code2 size={16} color="var(--accent-cyan)" />
              </a>
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <button
            type="button"
            className="btn-secondary"
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenResume();
            }}
          >
            <FileText size={16} />
            <span>View Digital Resume</span>
          </button>
          <a
            href="#contact"
            className="btn-primary"
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={(e) => handleLinkClick(e, '#contact')}
          >
            <Sparkles size={16} />
            <span>Get in Touch</span>
          </a>
        </div>
      </div>
    </header>
  );
}

