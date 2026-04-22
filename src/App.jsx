import { useEffect, useRef } from 'react'
import './App.css'

const skills = [
  { icon: '⚛️', name: 'React' },
  { icon: '🟨', name: 'JavaScript' },
  { icon: '🔷', name: 'TypeScript' },
  { icon: '🎨', name: 'CSS / Tailwind' },
  { icon: '🟢', name: 'Node.js' },
  { icon: '🗄️', name: 'PostgreSQL' },
  { icon: '🐳', name: 'Docker' },
  { icon: '☁️', name: 'AWS' },
  { icon: '🔧', name: 'Git' },
  { icon: '⚡', name: 'Vite' },
]

const projects = [
  {
    icon: '🛒',
    title: 'ShopFlow',
    desc: 'Full-stack e-commerce platform with real-time inventory, Stripe payments, and an admin dashboard.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    demo: '#',
    code: '#',
  },
  {
    icon: '💬',
    title: 'ChatSphere',
    desc: 'Real-time messaging app with rooms, file sharing, and end-to-end encryption.',
    tags: ['React', 'Socket.io', 'Redis', 'Docker'],
    demo: '#',
    code: '#',
  },
  {
    icon: '📊',
    title: 'DataViz Studio',
    desc: 'Interactive data visualization dashboard with drag-and-drop chart builder and CSV import.',
    tags: ['React', 'D3.js', 'TypeScript'],
    demo: '#',
    code: '#',
  },
]

function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); obs.disconnect() } },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

function RevealSection({ children, className = '' }) {
  const ref = useReveal()
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>
}

export default function App() {
  return (
    <>
      {/* Nav */}
      <nav className="nav">
        <span className="nav-logo">&lt;Parth /&gt;</span>
        <ul className="nav-links">
          {['About', 'Skills', 'Projects', 'Contact'].map(s => (
            <li key={s}><a href={`#${s.toLowerCase()}`}>{s}</a></li>
          ))}
        </ul>
      </nav>

      {/* Hero */}
      <section className="hero" id="hero">
        <div className="hero-bg" />
        <div className="hero-grid" />
        <div className="hero-content">
          <div className="hero-avatar">👨‍💻</div>
          <div className="hero-badge"><span />Available for work</div>
          <h1>
            Hi, I'm <span className="gradient-text">Parth</span>
            <br />Full-Stack Developer
          </h1>
          <p>I craft fast, beautiful web experiences — from pixel-perfect UIs to scalable back-end systems.</p>
          <div className="hero-btns">
            <a href="#projects" className="btn-primary">View My Work</a>
            <a href="#contact" className="btn-outline">Get In Touch</a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about">
        <RevealSection>
          <div className="about-grid">
            <div className="about-text">
              <p className="section-label">About Me</p>
              <h2 className="section-title">Turning ideas into <span className="gradient-text">reality</span></h2>
              <p>I'm a full-stack developer with 4+ years of experience building products that users love. I focus on clean code, great performance, and delightful interactions.</p>
              <p>When I'm not coding, you'll find me contributing to open source, writing tech articles, or exploring the latest in AI/ML.</p>
            </div>
            <div className="about-stats">
              {[
                { num: '4+', label: 'Years Experience' },
                { num: '30+', label: 'Projects Shipped' },
                { num: '15+', label: 'Happy Clients' },
                { num: '5k+', label: 'GitHub Stars' },
              ].map(s => (
                <div className="stat-card" key={s.label}>
                  <div className="num">{s.num}</div>
                  <div className="label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </RevealSection>
      </section>

      {/* Skills */}
      <section id="skills" style={{ background: 'var(--bg2)', maxWidth: '100%', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <RevealSection>
            <p className="section-label">Tech Stack</p>
            <h2 className="section-title">Skills & Tools</h2>
            <p className="section-sub">Technologies I use to bring ideas to life.</p>
            <div className="skills-grid">
              {skills.map(s => (
                <div className="skill-chip" key={s.name}>
                  <span className="icon">{s.icon}</span>
                  {s.name}
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Projects */}
      <section id="projects">
        <RevealSection>
          <p className="section-label">Portfolio</p>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-sub">A selection of things I've built recently.</p>
          <div className="projects-grid">
            {projects.map(p => (
              <div className="project-card" key={p.title}>
                <div className="project-icon">{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="project-tags">
                  {p.tags.map(t => <span className="tag" key={t}>{t}</span>)}
                </div>
                <div className="project-links">
                  <a href={p.demo}>🔗 Live Demo</a>
                  <a href={p.code}>⌨️ Source Code</a>
                </div>
              </div>
            ))}
          </div>
        </RevealSection>
      </section>

      {/* Contact */}
      <section id="contact" style={{ background: 'var(--bg2)', maxWidth: '100%', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <RevealSection>
            <div className="contact-wrapper">
              <p className="section-label">Contact</p>
              <h2 className="section-title">Let's Build Something</h2>
              <p style={{ color: 'var(--muted)', maxWidth: 480, margin: '0 auto', lineHeight: 1.7 }}>
                Have a project in mind or just want to say hi? My inbox is always open.
              </p>
              <div className="contact-links">
                <a href="mailto:parthatwork24@gmail.com" className="contact-link">📧 parthatwork24@gmail.com</a>
                <a href="https://github.com" className="contact-link" target="_blank" rel="noreferrer">🐙 GitHub</a>
                <a href="https://linkedin.com" className="contact-link" target="_blank" rel="noreferrer">💼 LinkedIn</a>
                <a href="https://twitter.com" className="contact-link" target="_blank" rel="noreferrer">🐦 Twitter</a>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      <footer>
        <p>Designed & built by <span className="gradient-text" style={{ fontWeight: 700 }}>Parth Rohit</span> · {new Date().getFullYear()}</p>
      </footer>
    </>
  )
}
