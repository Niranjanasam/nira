import { useState, useEffect } from 'react';
import { ArrowRight, Mail, FileText, Code, Database, Sparkles, Terminal, ShieldCheck } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const roles = [
    "Final Year B.E. CSE Student",
    "Full-Stack Developer (React & Java)",
    "AI & Web Solutions Innovator",
    "Database & Systems Enthusiast"
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  const scrollToProjects = (e) => {
    e.preventDefault();
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero-section">
      <div className="section-container" style={{ width: '100%' }}>
        <div className="hero-grid">
          {/* Left Column: Bio & CTAs */}
          <div>
            <div className="hero-badge-container">
              <div className="hero-badge">
                <span className="status-dot"></span>
                <span>Final Year B.E. CSE • Ready to Excel</span>
              </div>
            </div>

            <h1 className="hero-title">
              Engineering impact with code. <br />
              <span className="gradient-text">Niranjana Sambasivam</span>
            </h1>

            <div className="hero-role-wrapper">
              <span>I am a</span>
              <span className="role-typing-text">{displayText}</span>
              <span className="cursor-blink"></span>
            </div>

            <p className="hero-description">
              Final Year Computer Science and Engineering student specializing in building
              robust backend architectures with <strong>Java &amp; SQL</strong>, elegant animatic frontend
              interfaces using <strong>React &amp; JavaScript</strong>, and mission-critical applications
              such as the <strong>ChildGuard AI safety platform</strong>.
            </p>

            <div className="hero-cta-group">
              <a href="#projects" className="btn-primary" onClick={scrollToProjects}>
                <span>Explore Projects</span>
                <ArrowRight size={17} />
              </a>

              <a href="#contact" className="btn-secondary" onClick={scrollToContact}>
                <Mail size={17} />
                <span>Get in Touch</span>
              </a>

              <button
                type="button"
                className="btn-secondary"
                onClick={onOpenResume}
                style={{ borderColor: 'rgba(139, 92, 246, 0.4)', color: '#c084fc' }}
              >
                <FileText size={17} />
                <span>Digital Resume</span>
              </button>
            </div>

            {/* Metric Counters */}
            <div className="hero-stats-row">
              {personalInfo.stats.map((stat, idx) => (
                <div key={idx} className="stat-item">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-sub">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Animatic Code Terminal & Floating Badges */}
          <div className="hero-visual-card">
            <div className="floating-tech-badge badge-pos-1">
              <ShieldCheck size={18} color="var(--accent-cyan)" />
              <span>ChildGuard AI Protection</span>
            </div>

            <div className="floating-tech-badge badge-pos-2">
              <Database size={18} color="var(--accent-violet)" />
              <span>Full-Stack Architecture</span>
            </div>

            <div className="code-terminal-window">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <span className="dot-red"></span>
                  <span className="dot-yellow"></span>
                  <span className="dot-green"></span>
                </div>
                <div className="terminal-title">
                  <Terminal size={14} style={{ display: 'inline', marginRight: '4px' }} />
                  NiranjanaProfile.java
                </div>
                <span style={{ fontSize: '0.7rem', color: '#10b981' }}>Live</span>
              </div>

              <div className="terminal-body">
                <div className="terminal-line">
                  <span className="t-kw">public class</span>
                  <span className="t-fn">NiranjanaSambasivam</span>
                  <span>&#123;</span>
                </div>

                <div className="terminal-line" style={{ paddingLeft: '1rem' }}>
                  <span className="t-kw">String</span>
                  <span className="t-var">degree</span>
                  <span>=</span>
                  <span className="t-str">"B.E. Computer Science"</span>;
                </div>

                <div className="terminal-line" style={{ paddingLeft: '1rem' }}>
                  <span className="t-kw">String</span>
                  <span className="t-var">status</span>
                  <span>=</span>
                  <span className="t-str">"Final Year Student"</span>;
                </div>

                <div className="terminal-line" style={{ paddingLeft: '1rem' }}>
                  <span className="t-kw">String[]</span>
                  <span className="t-var">coreSkills</span>
                  <span>= &#123;</span>
                </div>

                <div className="terminal-line" style={{ paddingLeft: '2rem' }}>
                  <span className="t-str">"Java"</span>, <span className="t-str">"React"</span>, <span className="t-str">"JavaScript"</span>,
                </div>
                <div className="terminal-line" style={{ paddingLeft: '2rem' }}>
                  <span className="t-str">"SQL"</span>, <span className="t-str">"HTML5"</span>, <span className="t-str">"CSS3"</span>
                </div>

                <div className="terminal-line" style={{ paddingLeft: '1rem' }}>
                  <span>&#125;;</span>
                </div>

                <div className="terminal-line" style={{ paddingLeft: '1rem' }}>
                  <span className="t-kw">String[]</span>
                  <span className="t-var">flagshipProjects</span>
                  <span>= &#123;</span>
                </div>
                <div className="terminal-line" style={{ paddingLeft: '2rem' }}>
                  <span className="t-str">"ChildGuard AI"</span>,
                </div>
                <div className="terminal-line" style={{ paddingLeft: '2rem' }}>
                  <span className="t-str">"Real-Time Chat App"</span>,
                </div>
                <div className="terminal-line" style={{ paddingLeft: '2rem' }}>
                  <span className="t-str">"Weather Monitoring App"</span>
                </div>
                <div className="terminal-line" style={{ paddingLeft: '1rem' }}>
                  <span>&#125;;</span>
                </div>

                <div className="terminal-line" style={{ paddingLeft: '1rem', marginTop: '0.4rem' }}>
                  <span className="t-comment">// Ready to solve challenging problems</span>
                </div>
                <div className="terminal-line" style={{ paddingLeft: '1rem' }}>
                  <span className="t-kw">boolean</span>
                  <span className="t-var">availableForRoles</span>
                  <span>=</span>
                  <span className="t-num">true</span>;
                </div>

                <div className="terminal-line">
                  <span>&#125;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

