import { useState } from 'react';
import { 
  Rocket, 
  ExternalLink, 
  ShieldCheck, 
  MessageSquare, 
  CloudRain, 
  Layers, 
  Check, 
  Play,
  Terminal,
  Activity
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const getProjectIcon = (id) => {
    switch (id) {
      case 'childguard':
        return ShieldCheck;
      case 'chat-app':
        return MessageSquare;
      case 'weather-app':
        return CloudRain;
      default:
        return Rocket;
    }
  };

  return (
    <section id="projects" className="section-container">
      <div className="section-tag">
        <Rocket size={15} />
        <span>Featured Engineering Work</span>
      </div>

      <h2 className="section-heading">
        Projects &amp; <span className="gradient-text">Practical Innovations</span>
      </h2>
      <p className="section-subheading">
        Key software systems I have designed and built—spanning multimodal AI child protection,
        high-concurrency real-time messaging, and reactive telemetry tracking.
      </p>

      <div className="projects-grid">
        {projectsData.map((project, idx) => {
          const IconComponent = getProjectIcon(project.id);

          return (
            <div 
              key={project.id} 
              className="glass-card project-card"
              style={{
                borderColor: `${project.accentColor}33`,
              }}
            >
              {/* Left Column: Project Info */}
              <div>
                <span 
                  className="project-meta-pill"
                  style={{ 
                    background: `${project.accentColor}18`, 
                    color: project.accentColor,
                    border: `1px solid ${project.accentColor}40`
                  }}
                >
                  {project.badge}
                </span>

                <h3 className="project-title">{project.title}</h3>
                <div className="project-subtitle">{project.subtitle}</div>
                <p className="project-description">{project.shortDesc}</p>

                <div className="project-tech-pills">
                  {project.techStack.map((tech, tIdx) => (
                    <span key={tIdx} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  <button
                    type="button"
                    className="btn-primary"
                    style={{ background: project.gradient }}
                    onClick={() => setSelectedProject(project)}
                  >
                    <Play size={16} />
                    <span>Launch Live Demo</span>
                  </button>

                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={() => setSelectedProject(project)}
                  >
                    <Layers size={16} />
                    <span>Architecture &amp; Specs</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Animatic Interactive Preview Frame */}
              <div className="project-preview-box">
                <div className="preview-badge-header">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                    <IconComponent size={17} color={project.accentColor} />
                    <span style={{ fontWeight: 600, color: '#fff' }}>SYSTEM PREVIEW</span>
                  </div>
                  <span style={{ color: '#10b981', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span className="status-dot" style={{ width: '6px', height: '6px' }} />
                    Active Build
                  </span>
                </div>

                {/* Card-specific Animatic Mini View */}
                {project.id === 'childguard' && (
                  <div style={{ padding: '0.5rem 0' }}>
                    <div style={{
                      background: 'rgba(239, 68, 68, 0.1)',
                      border: '1px solid rgba(239, 68, 68, 0.3)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '0.75rem',
                      marginBottom: '0.75rem'
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#fca5a5', fontWeight: 600 }}>
                        <span>THREAT SCAN ENGINE</span>
                        <span style={{ fontFamily: 'var(--font-mono)' }}>99.2% ACCURACY</span>
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                        Multimodal Violence Detection • Instant Alert Beacon
                      </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.78rem', color: 'var(--text-dim)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <Check size={14} color="#10b981" />
                        <span>Sentiment distress recognition active</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <Check size={14} color="#10b981" />
                        <span>Automated emergency dispatch conduit</span>
                      </div>
                    </div>
                  </div>
                )}

                {project.id === 'chat-app' && (
                  <div style={{ padding: '0.5rem 0' }}>
                    <div style={{
                      background: 'rgba(6, 182, 212, 0.1)',
                      border: '1px solid rgba(6, 182, 212, 0.3)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '0.75rem',
                      marginBottom: '0.75rem'
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#67e8f9', fontWeight: 600 }}>
                        <span>SOCKET CLUSTER #1</span>
                        <span style={{ fontFamily: 'var(--font-mono)' }}>PING: 18ms</span>
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                        Bi-directional real-time syncing • SQL conversation store
                      </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.78rem', color: 'var(--text-dim)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <Check size={14} color="#10b981" />
                        <span>Instant broadcast &amp; presence detection</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <Check size={14} color="#10b981" />
                        <span>Optimistic UI dispatch &amp; delivery ticks</span>
                      </div>
                    </div>
                  </div>
                )}

                {project.id === 'weather-app' && (
                  <div style={{ padding: '0.5rem 0' }}>
                    <div style={{
                      background: 'rgba(245, 158, 11, 0.1)',
                      border: '1px solid rgba(245, 158, 11, 0.3)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '0.75rem',
                      marginBottom: '0.75rem'
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#fcd34d', fontWeight: 600 }}>
                        <span>METEOROLOGICAL TELEMETRY</span>
                        <span style={{ fontFamily: 'var(--font-mono)' }}>LIVE GAUGES</span>
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                        Dynamic visual skies • Real-time humidity &amp; UV indices
                      </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.78rem', color: 'var(--text-dim)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <Check size={14} color="#10b981" />
                        <span>Adaptive ambient visual weather states</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <Check size={14} color="#10b981" />
                        <span>Multi-city global forecast lookups</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Bottom CTA within card */}
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  paddingTop: '0.75rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                  marginTop: 'auto'
                }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                    Click to test live simulator &rarr;
                  </span>
                  <button
                    type="button"
                    style={{
                      background: 'none',
                      border: 'none',
                      color: project.accentColor,
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem'
                    }}
                    onClick={() => setSelectedProject(project)}
                  >
                    <span>Inspect</span>
                    <ExternalLink size={14} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

