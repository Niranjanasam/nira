import { useState } from 'react';
import { 
  Coffee, 
  Code2, 
  Atom, 
  Database, 
  FileCode, 
  Palette, 
  Sparkles, 
  Check, 
  Cpu 
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const iconMap = {
  Coffee: Coffee,
  Atom: Atom,
  Code2: Code2,
  Database: Database,
  FileCode: FileCode,
  Palette: Palette
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedSkill, setSelectedSkill] = useState(null);

  const categories = ['All', 'Core & Backend', 'Frontend', 'Database & Systems'];

  const filteredSkills = activeCategory === 'All' 
    ? skillsData 
    : skillsData.filter(s => s.category.includes(activeCategory) || activeCategory.includes(s.category.split(' ')[0]));

  return (
    <section id="skills" className="section-container">
      <div className="section-tag">
        <Cpu size={15} />
        <span>Technical Arsenal</span>
      </div>

      <h2 className="section-heading">
        Skills &amp; <span className="gradient-text">Core Competencies</span>
      </h2>
      <p className="section-subheading">
        Deeply practiced programming languages, frameworks, styling architectures, and database
        systems powering my development workflow.
      </p>

      {/* Category Filter Tabs */}
      <div className="skills-controls">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            className={`skill-tab-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="skills-grid">
        {filteredSkills.map((skill) => {
          const IconComponent = iconMap[skill.icon] || Code2;
          const isSelected = selectedSkill?.name === skill.name;

          return (
            <div 
              key={skill.name} 
              className={`glass-card skill-card ${isSelected ? 'selected' : ''}`}
              onClick={() => setSelectedSkill(isSelected ? null : skill)}
              style={{
                cursor: 'pointer',
                borderColor: isSelected ? skill.color : undefined,
                boxShadow: isSelected ? `0 0 25px ${skill.color}33` : undefined
              }}
            >
              <div className="skill-card-header">
                <div 
                  className="skill-icon-wrapper" 
                  style={{ 
                    background: `${skill.color}1a`, 
                    color: skill.color,
                    border: `1px solid ${skill.color}40`
                  }}
                >
                  <IconComponent size={26} />
                </div>
                <span className="skill-badge-category">{skill.category}</span>
              </div>

              <h3 className="skill-name">{skill.name}</h3>
              <p className="skill-description">{skill.description}</p>

              <div className="skill-progress-section">
                <div className="progress-labels">
                  <span>Proficiency Level</span>
                  <span style={{ color: skill.color, fontWeight: 700 }}>{skill.proficiency}%</span>
                </div>
                <div className="progress-track">
                  <div 
                    className="progress-fill" 
                    style={{ 
                      width: `${skill.proficiency}%`, 
                      background: `linear-gradient(90deg, ${skill.color}99, ${skill.color})`,
                      color: skill.color
                    }}
                  />
                </div>
              </div>

              <div className="skill-highlights-list">
                {skill.highlights.map((item, idx) => (
                  <span key={idx} className="skill-highlight-tag">
                    <Check size={12} style={{ display: 'inline', marginRight: '4px', color: skill.color }} />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

