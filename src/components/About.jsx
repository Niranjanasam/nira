import { GraduationCap, Award, BookOpen, Layers, CheckCircle2, Calendar } from 'lucide-react';
import { personalInfo, educationData } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="section-container">
      <div className="section-tag">
        <GraduationCap size={15} />
        <span>Profile &amp; Background</span>
      </div>

      <h2 className="section-heading">
        Academic Excellence &amp; <span className="gradient-text">Engineering Drive</span>
      </h2>
      <p className="section-subheading">
        A glimpse into my educational pathway in Computer Science &amp; Engineering, my technical
        curiosity, and how I approach complex software challenges.
      </p>

      <div className="about-grid">
        {/* Left Side: Personal Philosophy & Focus */}
        <div className="glass-card about-card">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                background: 'rgba(6, 182, 212, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-cyan)'
              }}>
                <BookOpen size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff' }}>About Me</h3>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                  Niranjana Sambasivam
                </span>
              </div>
            </div>

            <div className="about-paragraphs">
              {personalInfo.about.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div style={{ marginTop: '2rem' }}>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Layers size={17} color="var(--accent-cyan)" />
                <span>Primary Engineering Disciplines</span>
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0.65rem' }}>
                {educationData.focusAreas.map((area, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    <CheckCircle2 size={16} color="var(--accent-emerald)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Degree & Timeline Card */}
        <div className="glass-card education-card">
          <div className="edu-badge-highlight">
            <Award size={15} />
            <span>Undergraduate Degree Program</span>
          </div>

          <h3 className="edu-degree-title">{educationData.degree}</h3>
          <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#e2e8f0', marginBottom: '0.35rem' }}>
            {educationData.major}
          </div>
          <div className="edu-institution">
            <span>{educationData.institution}</span> • <span>{educationData.period}</span>
          </div>

          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.35rem 0.8rem',
            background: 'rgba(16, 185, 129, 0.12)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            borderRadius: 'var(--radius-full)',
            color: '#34d399',
            fontSize: '0.8rem',
            fontWeight: 600,
            marginBottom: '1rem'
          }}>
            <Calendar size={14} />
            <span>Currently in Final Year (Graduating 2026)</span>
          </div>

          {/* Academic Timeline */}
          <div className="edu-timeline">
            {educationData.milestones.map((milestone, idx) => (
              <div key={idx} className={`timeline-step ${idx === 0 ? 'active' : ''}`}>
                <div className="timeline-year">{milestone.year}</div>
                <div className="timeline-heading">{milestone.title}</div>
                <div className="timeline-desc">{milestone.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

