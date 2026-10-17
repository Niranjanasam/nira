import { X, Printer, Download, GraduationCap, Code2, Briefcase, Mail, MapPin } from 'lucide-react';
import { personalInfo, educationData, skillsData, projectsData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-dialog" 
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '820px', background: '#0a0f1d' }}
      >
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff' }}>
              Digital Curriculum Vitae
            </h2>
            <span style={{ 
              fontSize: '0.72rem', 
              fontFamily: 'var(--font-mono)', 
              color: 'var(--accent-cyan)',
              background: 'rgba(6, 182, 212, 0.1)',
              padding: '0.2rem 0.6rem',
              borderRadius: 'var(--radius-full)'
            }}>
              Verified Profile
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button
              type="button"
              className="btn-secondary"
              onClick={handlePrint}
              style={{ padding: '0.45rem 0.9rem', fontSize: '0.8rem' }}
            >
              <Printer size={15} />
              <span>Print / Save PDF</span>
            </button>
            <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close modal">
              <X size={18} />
            </button>
          </div>
        </div>

        <div className="modal-content" style={{ padding: '2.5rem', background: '#0d1322', color: '#e2e8f0' }}>
          {/* Resume Header */}
          <div style={{ borderBottom: '2px solid rgba(255, 255, 255, 0.1)', paddingBottom: '1.5rem', marginBottom: '1.5rem' }}>
            <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', marginBottom: '0.25rem' }}>
              {personalInfo.name}
            </h1>
            <div style={{ fontSize: '1.05rem', color: 'var(--accent-cyan)', fontWeight: 600, marginBottom: '0.75rem' }}>
              {personalInfo.degree} &bull; {personalInfo.status}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Mail size={15} color="var(--accent-cyan)" />
                {personalInfo.socials.email}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <MapPin size={15} color="var(--accent-violet)" />
                {personalInfo.location}
              </span>
            </div>
          </div>

          {/* Education */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '0.4rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <GraduationCap size={18} color="var(--accent-emerald)" />
              <span>Education</span>
            </h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div>
                <strong style={{ color: '#fff', fontSize: '1rem' }}>{educationData.degree} in {educationData.major}</strong>
                <div style={{ color: 'var(--accent-cyan)', fontSize: '0.85rem' }}>{educationData.institution}</div>
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: '#34d399', fontWeight: 600 }}>
                {educationData.period} ({educationData.status})
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '0.4rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Code2 size={18} color="var(--accent-cyan)" />
              <span>Technical Skills</span>
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '0.75rem' }}>
              {skillsData.map((s) => (
                <div key={s.name} style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '0.65rem 0.85rem', borderRadius: 'var(--radius-sm)' }}>
                  <div style={{ fontWeight: 700, color: '#fff', fontSize: '0.9rem' }}>{s.name}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{s.category}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Highlighted Projects */}
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '0.4rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Briefcase size={18} color="var(--accent-amber)" />
              <span>Key Software Projects</span>
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {projectsData.map((p) => (
                <div key={p.id}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                    <h4 style={{ color: '#fff', fontWeight: 700, fontSize: '1rem' }}>{p.title}</h4>
                    <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: p.accentColor }}>
                      {p.category}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0.3rem 0 0.5rem' }}>
                    {p.shortDesc}
                  </p>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                    <strong>Technologies:</strong> {p.techStack.join(' • ')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

