import { useState } from 'react';
import { 
  X, 
  ShieldAlert, 
  Send, 
  CloudSun, 
  Wind, 
  Droplets, 
  Compass, 
  CheckCheck, 
  AlertTriangle, 
  BellRing, 
  Layers, 
  Code2, 
  CheckCircle,
  Activity,
  Play
} from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState('simulation'); // 'simulation' | 'architecture' | 'features'

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span 
                className="project-meta-pill"
                style={{ 
                  background: `${project.accentColor}20`,
                  color: project.accentColor,
                  border: `1px solid ${project.accentColor}40`,
                  marginBottom: 0
                }}
              >
                {project.badge}
              </span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                {project.category}
              </span>
            </div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', marginTop: '0.35rem' }}>
              {project.title}
            </h2>
          </div>

          <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div style={{ 
          display: 'flex', 
          gap: '1rem', 
          padding: '0.75rem 2rem 0', 
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          background: 'rgba(13, 19, 34, 0.4)'
        }}>
          <button
            type="button"
            className={`skill-tab-btn ${activeTab === 'simulation' ? 'active' : ''}`}
            onClick={() => setActiveTab('simulation')}
          >
            Interactive Live Simulation
          </button>
          <button
            type="button"
            className={`skill-tab-btn ${activeTab === 'architecture' ? 'active' : ''}`}
            onClick={() => setActiveTab('architecture')}
          >
            System Architecture
          </button>
          <button
            type="button"
            className={`skill-tab-btn ${activeTab === 'features' ? 'active' : ''}`}
            onClick={() => setActiveTab('features')}
          >
            Core Features &amp; Impact
          </button>
        </div>

        <div className="modal-content">
          {/* TAB 1: INTERACTIVE SIMULATION */}
          {activeTab === 'simulation' && (
            <div>
              {project.id === 'childguard' && <ChildGuardSimulator />}
              {project.id === 'chat-app' && <ChatSimulator />}
              {project.id === 'weather-app' && <WeatherSimulator />}
            </div>
          )}

          {/* TAB 2: ARCHITECTURE */}
          {activeTab === 'architecture' && (
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Layers size={19} color="var(--accent-cyan)" />
                <span>System Architecture &amp; Data Pipeline</span>
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                {project.architecture.map((step, idx) => (
                  <div key={idx} style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start', 
                    gap: '1rem',
                    padding: '1rem',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    borderRadius: 'var(--radius-md)'
                  }}>
                    <div style={{ 
                      width: '28px', 
                      height: '28px', 
                      borderRadius: '50%', 
                      background: 'rgba(6, 182, 212, 0.15)',
                      border: '1px solid var(--accent-cyan)',
                      color: 'var(--accent-cyan)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 700,
                      fontSize: '0.8rem',
                      flexShrink: 0
                    }}>
                      {idx + 1}
                    </div>
                    <span style={{ color: 'var(--text-main)', fontSize: '0.92rem', lineHeight: 1.5 }}>
                      {step}
                    </span>
                  </div>
                ))}
              </div>

              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', marginBottom: '0.75rem' }}>
                Technologies Utilized
              </h4>
              <div className="project-tech-pills">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="tech-pill" style={{ borderColor: 'rgba(6, 182, 212, 0.3)', color: 'var(--accent-cyan)' }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: FEATURES & IMPACT */}
          {activeTab === 'features' && (
            <div>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                {project.longDesc}
              </p>

              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '1rem' }}>
                Key Functional Highlights
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {project.features.map((feature, idx) => (
                  <div key={idx} style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start', 
                    gap: '0.75rem',
                    padding: '0.85rem 1rem',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    borderRadius: 'var(--radius-sm)'
                  }}>
                    <CheckCircle size={18} color="var(--accent-emerald)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-main)', lineHeight: 1.5 }}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   SIMULATOR 1: CHILDGUARD AI THREAT MONITOR
   ========================================================================== */
function ChildGuardSimulator() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [incidents, setIncidents] = useState([
    { id: 1, time: 'Just now', type: 'Physical Harassment Pattern', score: '92% Alert', status: 'Beacon Dispatched', level: 'high' },
    { id: 2, time: '3 mins ago', type: 'Verbal Intimidation Distress', score: '88% Alert', status: 'Under Review', level: 'medium' },
    { id: 3, time: '12 mins ago', type: 'Geo-Fence Departure Anomaly', score: '74% Notice', status: 'Parent Notified', level: 'low' }
  ]);
  const [beaconSent, setBeaconSent] = useState(false);

  const handleSimulateIncident = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      const newAlert = {
        id: Date.now(),
        time: 'Just now',
        type: 'Urgent Acoustic Distress Signal Detected',
        score: '96% CRITICAL',
        status: 'Authorities & Guardians Alerted',
        level: 'high'
      };
      setIncidents([newAlert, ...incidents]);
      setIsAnalyzing(false);
      setBeaconSent(true);
      setTimeout(() => setBeaconSent(false), 4000);
    }, 1200);
  };

  return (
    <div className="childguard-sim-card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.75rem' }}>
        <div>
          <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ShieldAlert size={20} color="#ef4444" />
            <span>ChildGuard AI Protection Console</span>
          </h4>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
            Status: Active Monitoring • Multimodal AI Engine v2.4
          </span>
        </div>

        <button
          type="button"
          className="btn-primary"
          style={{ background: 'linear-gradient(135deg, #ef4444, #b91c1c)', fontSize: '0.82rem', padding: '0.5rem 1rem' }}
          onClick={handleSimulateIncident}
          disabled={isAnalyzing}
        >
          {isAnalyzing ? <Activity size={15} className="cursor-blink" /> : <Play size={15} />}
          <span>{isAnalyzing ? 'Analyzing Stream...' : 'Simulate Threat Trigger'}</span>
        </button>
      </div>

      {beaconSent && (
        <div style={{
          background: 'rgba(239, 68, 68, 0.2)',
          border: '1px solid #ef4444',
          borderRadius: 'var(--radius-sm)',
          padding: '0.75rem 1rem',
          color: '#fca5a5',
          fontSize: '0.85rem',
          fontWeight: 600,
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          marginBottom: '1rem',
          animation: 'badgeBreathe 1s infinite'
        }}>
          <BellRing size={18} color="#ef4444" />
          <span>EMERGENCY BEACON DISPATCHED: Child Protection Helpline &amp; Designated Guardian Geo-Alerted!</span>
        </div>
      )}

      {/* Status Banner */}
      <div className="cg-status-banner">
        <div className="cg-threat-indicator">
          <div className="cg-radar-circle"></div>
          <span>AI SURVEILLANCE &amp; THREAT CLASSIFIER</span>
        </div>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#fca5a5' }}>
          LATENCY: 42ms • ENCRYPTION: AES-256
        </span>
      </div>

      {/* Incident Stream */}
      <div className="cg-events-list">
        {incidents.map((inc) => (
          <div key={inc.id} className="cg-event-item" style={{
            borderLeftColor: inc.level === 'high' ? '#ef4444' : inc.level === 'medium' ? '#f59e0b' : '#10b981'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <AlertTriangle size={16} color={inc.level === 'high' ? '#ef4444' : '#f59e0b'} />
              <div>
                <div style={{ fontWeight: 600, color: '#fff' }}>{inc.type}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                  {inc.time} • AI Confidence: {inc.score}
                </div>
              </div>
            </div>

            <span style={{
              fontSize: '0.75rem',
              fontFamily: 'var(--font-mono)',
              padding: '0.2rem 0.6rem',
              borderRadius: 'var(--radius-full)',
              background: inc.level === 'high' ? 'rgba(239, 68, 68, 0.2)' : 'rgba(16, 185, 129, 0.2)',
              color: inc.level === 'high' ? '#f87171' : '#34d399',
              border: `1px solid ${inc.level === 'high' ? 'rgba(239,68,68,0.4)' : 'rgba(16,185,129,0.4)'}`
            }}>
              {inc.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ==========================================================================
   SIMULATOR 2: REAL-TIME CHAT APPLICATION
   ========================================================================== */
function ChatSimulator() {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Priya (Peer Reviewer)', text: 'Hey Niranjana! Have you integrated the socket room listeners?', type: 'incoming', time: '10:41 AM' },
    { id: 2, sender: 'You', text: 'Yes, full bi-directional syncing is live with optimistic rendering!', type: 'outgoing', time: '10:42 AM' },
    { id: 3, sender: 'Priya (Peer Reviewer)', text: 'Awesome! Latency looks super crisp and responsive.', type: 'incoming', time: '10:43 AM' }
  ]);
  const [inputText, setInputText] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMsg = {
      id: Date.now(),
      sender: 'You',
      text: inputText,
      type: 'outgoing',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');

    // Automated simulated response after 900ms
    setTimeout(() => {
      const replies = [
        "Received on socket channel! Message confirmed in SQL database.",
        "Got your message! The real-time connection is running flawlessly.",
        "Delivered instantly via WebSocket stream!",
        "Active status confirmed! React state updated seamlessly."
      ];
      const randomReply = replies[Math.floor(Math.random() * replies.length)];
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'Peer System',
          text: randomReply,
          type: 'incoming',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    }, 900);
  };

  return (
    <div className="chat-sim-container">
      <div className="chat-sim-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <div style={{ position: 'relative' }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-blue))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              fontSize: '0.8rem',
              color: '#fff'
            }}>
              CS
            </div>
            <span style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#10b981',
              border: '2px solid #0d1322'
            }} />
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#fff' }}>CSE Engineering Squad #1</div>
            <span style={{ fontSize: '0.72rem', color: '#10b981', fontFamily: 'var(--font-mono)' }}>● 4 members online</span>
          </div>
        </div>

        <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>
          Socket ID: #ws-9042
        </span>
      </div>

      <div className="chat-sim-messages">
        {messages.map((m) => (
          <div key={m.id} className={`chat-msg ${m.type}`}>
            <div style={{ fontSize: '0.7rem', opacity: 0.8, marginBottom: '2px' }}>
              {m.sender} • {m.time}
            </div>
            <div>{m.text}</div>
            {m.type === 'outgoing' && (
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2px' }}>
                <CheckCheck size={14} color="#67e8f9" />
              </div>
            )}
          </div>
        ))}
      </div>

      <form className="chat-sim-input-row" onSubmit={handleSendMessage}>
        <input
          type="text"
          className="chat-input"
          placeholder="Type a test message and press Enter..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button
          type="submit"
          className="btn-primary"
          style={{ padding: '0.5rem 1rem', borderRadius: 'var(--radius-full)' }}
          aria-label="Send message"
        >
          <Send size={15} />
        </button>
      </form>
    </div>
  );
}

/* ==========================================================================
   SIMULATOR 3: WEATHER MONITORING APP
   ========================================================================== */
function WeatherSimulator() {
  const cities = {
    Chennai: { temp: 31, condition: 'Humid & Sunny', humidity: 78, wind: '14 km/h', uv: '8.4 Very High', icon: 'sunny' },
    London: { temp: 16, condition: 'Light Rain Showers', humidity: 82, wind: '22 km/h', uv: '3.1 Moderate', icon: 'rain' },
    'San Francisco': { temp: 19, condition: 'Breezy & Foggy', humidity: 72, wind: '18 km/h', uv: '5.2 Moderate', icon: 'cloud' },
    Tokyo: { temp: 24, condition: 'Scattered Clouds', humidity: 64, wind: '11 km/h', uv: '6.0 High', icon: 'cloud' },
    'New York': { temp: 22, condition: 'Clear Skies', humidity: 55, wind: '15 km/h', uv: '6.5 High', icon: 'sunny' }
  };

  const [activeCity, setActiveCity] = useState('Chennai');
  const current = cities[activeCity];

  return (
    <div className="weather-sim-container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
        <div>
          <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <CloudSun size={20} color="#f59e0b" />
            <span>Live Weather Telemetry Console</span>
          </h4>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
            Real-Time Meteorological API Feed Simulator
          </span>
        </div>
      </div>

      {/* City Switcher */}
      <div className="weather-city-selector">
        {Object.keys(cities).map((city) => (
          <button
            key={city}
            type="button"
            className={`weather-city-btn ${activeCity === city ? 'active' : ''}`}
            onClick={() => setActiveCity(city)}
          >
            {city}
          </button>
        ))}
      </div>

      {/* Main Condition Banner */}
      <div className="weather-display-banner">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-amber)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
            <Compass size={15} />
            <span>{activeCity}</span>
          </div>
          <div className="weather-temp-big">{current.temp}&deg;C</div>
          <div style={{ color: '#fff', fontWeight: 600, fontSize: '1rem', marginTop: '0.2rem' }}>
            {current.condition}
          </div>
        </div>

        <div style={{
          width: '72px',
          height: '72px',
          borderRadius: '50%',
          background: 'rgba(245, 158, 11, 0.15)',
          border: '2px solid rgba(245, 158, 11, 0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#f59e0b',
          animation: 'float 4s ease-in-out infinite'
        }}>
          <CloudSun size={38} />
        </div>
      </div>

      {/* Telemetry Grid */}
      <div className="weather-metrics-grid">
        <div className="weather-metric-tile">
          <div style={{ color: 'var(--accent-cyan)', marginBottom: '0.25rem' }}>
            <Droplets size={18} style={{ margin: '0 auto' }} />
          </div>
          <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>HUMIDITY</div>
          <div style={{ fontWeight: 700, color: '#fff', fontSize: '1rem' }}>{current.humidity}%</div>
        </div>

        <div className="weather-metric-tile">
          <div style={{ color: 'var(--accent-violet)', marginBottom: '0.25rem' }}>
            <Wind size={18} style={{ margin: '0 auto' }} />
          </div>
          <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>WIND SPEED</div>
          <div style={{ fontWeight: 700, color: '#fff', fontSize: '1rem' }}>{current.wind}</div>
        </div>

        <div className="weather-metric-tile">
          <div style={{ color: '#f59e0b', marginBottom: '0.25rem' }}>
            <CloudSun size={18} style={{ margin: '0 auto' }} />
          </div>
          <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>UV INDEX</div>
          <div style={{ fontWeight: 700, color: '#fff', fontSize: '1rem' }}>{current.uv}</div>
        </div>
      </div>
    </div>
  );
}

