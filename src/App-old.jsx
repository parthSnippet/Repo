import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

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

const education = [
  {
    icon: '🎓',
    degree: 'Master of Computer Science',
    school: 'Stanford University',
    period: '2018 - 2020',
    desc: 'Specialized in Artificial Intelligence and Machine Learning. GPA: 3.9/4.0',
  },
  {
    icon: '🎓',
    degree: 'Bachelor of Computer Science',
    school: 'MIT',
    period: '2014 - 2018',
    desc: 'Focus on Software Engineering and Web Technologies. GPA: 3.8/4.0',
  },
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

function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-4 sm:px-8 pt-24 pb-16 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#7c3aed]/20 via-[#0a0a0f] to-[#06b6d4]/20 animate-gradient" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.15),transparent_50%)]" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#7c3aed] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0f]/50 to-[#0a0a0f] pointer-events-none z-[1]" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#06b6d4] flex items-center justify-center text-4xl sm:text-5xl mx-auto mb-6 sm:mb-8 shadow-[0_0_40px_rgba(124,58,237,0.5)] cursor-pointer"
        >
          👨💻
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="inline-flex items-center gap-2 bg-[#7c3aed]/15 border border-[#7c3aed]/30 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-[#06b6d4] mb-4 sm:mb-6"
        >
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-2 h-2 bg-[#06b6d4] rounded-full"
          />
          Available for work
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-4 sm:mb-6"
        >
          Hi, I'm <motion.span
            className="gradient-text"
            whileHover={{ scale: 1.05 }}
            style={{ display: 'inline-block' }}
          >
            Parth Rohit
          </motion.span>
          <br />Full-Stack Developer
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed"
        >
          I craft fast, beautiful web experiences — from pixel-perfect UIs to scalable back-end systems.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#7c3aed] to-[#5b21b6] text-white rounded-lg font-semibold shadow-[0_8px_30px_rgba(124,58,237,0.4)] transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(124,58,237,0.6)]"
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-[#7c3aed]/30 text-slate-100 rounded-lg font-semibold hover:border-[#7c3aed] hover:bg-[#7c3aed]/10 transition-all duration-300"
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 px-4 sm:px-8 py-4 sm:py-5 flex justify-between items-center backdrop-blur-xl bg-[#0a0a0f]/70 border-b border-[#7c3aed]/20">
        <span className="text-xl sm:text-2xl font-extrabold gradient-text">&lt;Parth /&gt;</span>
        <ul className="flex gap-3 sm:gap-6 md:gap-8 list-none">
          {['About', 'Skills', 'Education', 'Projects', 'Contact'].map(s => (
            <li key={s}>
              <a 
                href={`#${s.toLowerCase()}`}
                className="text-slate-400 text-xs sm:text-sm font-medium hover:text-slate-100 transition-colors relative group"
              >
                {s}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero */}
      <HeroSection />

      {/* About */}
      <section id="about" className="py-16 sm:py-20 md:py-24 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <RevealSection>
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#06b6d4] mb-2"
                >
                  About Me
                </motion.p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6">
                  Turning ideas into <span className="gradient-text">reality</span>
                </h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-slate-400 leading-relaxed mb-4 text-base sm:text-lg"
                >
                  I'm a full-stack developer with 4+ years of experience building products that users love. I focus on clean code, great performance, and delightful interactions.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-slate-400 leading-relaxed text-base sm:text-lg"
                >
                  When I'm not coding, you'll find me contributing to open source, writing tech articles, or exploring the latest in AI/ML.
                </motion.p>
              </motion.div>
              
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  { num: '4+', label: 'Years Experience', icon: '🚀' },
                  { num: '30+', label: 'Projects Shipped', icon: '📦' },
                  { num: '15+', label: 'Happy Clients', icon: '😊' },
                  { num: '5k+', label: 'GitHub Stars', icon: '⭐' },
                ].map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: i * 0.1,
                      type: 'spring',
                      stiffness: 100
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: '0 20px 40px rgba(124, 58, 237, 0.4)'
                    }}
                    className="bg-gradient-to-br from-[#16161f] to-[#1a1a28] border border-[#7c3aed]/20 rounded-2xl p-4 sm:p-6 text-center hover:border-[#7c3aed] transition-all duration-300 cursor-default relative overflow-hidden group will-change-transform"
                  >
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="text-2xl sm:text-3xl mb-2 relative z-10"
                    >
                      {s.icon}
                    </motion.div>
                    <motion.div
                      className="text-2xl sm:text-3xl md:text-4xl font-extrabold gradient-text mb-1 relative z-10"
                    >
                      {s.num}
                    </motion.div>
                    <div className="text-xs sm:text-sm text-slate-400 relative z-10">{s.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-[#111118] py-16 sm:py-20 md:py-24 px-4 sm:px-8 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#7c3aed]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#06b6d4]/10 rounded-full blur-3xl" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <RevealSection>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <p className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#06b6d4] mb-2">Tech Stack</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
                Skills & <span className="gradient-text">Tools</span>
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
                Technologies I use to bring ideas to life.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
              {skills.map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: i * 0.05,
                    type: 'spring',
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: '0 15px 35px rgba(124, 58, 237, 0.4)'
                  }}
                  className="bg-gradient-to-br from-[#16161f] to-[#1a1a28] border border-[#7c3aed]/20 rounded-2xl p-4 sm:p-5 text-center font-semibold hover:border-[#7c3aed] transition-all duration-300 cursor-pointer relative overflow-hidden group will-change-transform"
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#7c3aed]/20 to-[#06b6d4]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  
                  <motion.span
                    whileHover={{ scale: 1.3, rotate: 360 }}
                    transition={{ duration: 0.6, type: 'spring' }}
                    className="text-3xl sm:text-4xl block mb-2 relative z-10"
                  >
                    {s.icon}
                  </motion.span>
                  <span className="text-xs sm:text-sm relative z-10">{s.name}</span>
                </motion.div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-16 sm:py-20 md:py-24 px-4 sm:px-8">
        <div className="max-w-5xl mx-auto">
          <RevealSection>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16"
            >
              <p className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#06b6d4] mb-3">Education</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
                Academic <span className="gradient-text">Background</span>
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
                My journey through higher education.
              </p>
            </motion.div>
            
            <div className="space-y-6 sm:space-y-8">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: '0 25px 60px rgba(124, 58, 237, 0.4)'
                  }}
                  className="bg-gradient-to-br from-[#16161f] to-[#1a1a28] border border-[#7c3aed]/20 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start relative overflow-hidden group hover:border-[#7c3aed] transition-all duration-500 will-change-transform"
                >
                  {/* Left Border Accent */}
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: 0 }}
                    whileHover={{ height: '100%' }}
                    transition={{ duration: 0.5 }}
                    className="absolute left-0 top-0 w-1 bg-gradient-to-b from-[#7c3aed] to-[#06b6d4]"
                  />
                  
                  {/* Glow Effect */}
                  <div className="absolute -right-1/2 top-1/2 w-64 h-64 bg-[#7c3aed]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 group-hover:-right-1/4 transition-all duration-700 pointer-events-none" />
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 12, scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 flex items-center justify-center text-4xl sm:text-5xl bg-gradient-to-br from-[#7c3aed]/30 to-[#06b6d4]/30 border-2 border-[#7c3aed]/40 rounded-2xl relative z-10"
                  >
                    {edu.icon}
                  </motion.div>
                  
                  {/* Content */}
                  <div className="flex-1 relative z-10 min-w-0">
                    <motion.h3
                      whileHover={{ x: 5 }}
                      className="text-xl sm:text-2xl font-bold mb-2 bg-gradient-to-r from-slate-100 to-[#06b6d4] bg-clip-text text-transparent"
                    >
                      {edu.degree}
                    </motion.h3>
                    <div className="text-lg font-semibold text-[#06b6d4] mb-3">{edu.school}</div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="inline-flex items-center gap-2 text-sm text-slate-400 bg-[#7c3aed]/15 px-4 py-2 rounded-full border border-[#7c3aed]/30 mb-4"
                    >
                      <span className="text-base">📅</span>
                      <span>{edu.period}</span>
                    </motion.div>
                    <p className="text-base text-slate-400 leading-relaxed">{edu.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 sm:py-20 md:py-24 px-4 sm:px-8 relative">
        <div className="max-w-7xl mx-auto">
          {/* Background decoration */}
          <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#7c3aed]/5 rounded-full blur-3xl -z-10" />
          <div className="absolute top-1/3 right-0 w-72 h-72 bg-[#06b6d4]/5 rounded-full blur-3xl -z-10" />
          
          <RevealSection>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16 relative z-10"
            >
              <p className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#06b6d4] mb-3">Portfolio</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
                Featured <span className="gradient-text">Projects</span>
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
                A selection of things I've built recently.
              </p>
            </motion.div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative z-10">
              {projects.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: i * 0.15,
                    type: 'spring',
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: '0 30px 60px rgba(0, 0, 0, 0.6)'
                  }}
                  className="bg-gradient-to-br from-[#16161f] to-[#1a1a28] border border-[#7c3aed]/20 rounded-3xl p-6 sm:p-8 relative overflow-hidden group hover:border-[#7c3aed]/50 transition-all duration-300 will-change-transform flex flex-col"
                >
                  {/* Top Accent */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.5 }}
                    className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#7c3aed] via-[#06b6d4] to-[#7c3aed] origin-left"
                  />
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#7c3aed]/10 to-[#06b6d4]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  
                  <div className="relative z-10 flex-1 flex flex-col">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: 'spring', stiffness: 200 }}
                      className="text-4xl sm:text-5xl mb-5 inline-block"
                    >
                      {p.icon}
                    </motion.div>
                    
                    <motion.h3
                      whileHover={{ x: 5 }}
                      className="text-xl sm:text-2xl font-bold mb-3 bg-gradient-to-r from-slate-100 to-[#06b6d4] bg-clip-text text-transparent"
                    >
                      {p.title}
                    </motion.h3>
                    
                    <p className="text-base text-slate-400 leading-relaxed mb-6 flex-1">{p.desc}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {p.tags.map(t => (
                        <motion.span
                          key={t}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="bg-[#7c3aed]/15 text-[#06b6d4] border border-[#06b6d4]/30 rounded-full px-3 py-1.5 text-xs font-semibold cursor-default"
                        >
                          {t}
                        </motion.span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4 text-sm font-semibold pt-4 border-t border-[#7c3aed]/20">
                      <motion.a
                        href={p.demo}
                        whileHover={{ scale: 1.05, x: 3 }}
                        className="flex items-center gap-2 text-slate-400 hover:text-[#06b6d4] transition-colors"
                      >
                        <span className="text-lg">🔗</span> Live Demo
                      </motion.a>
                      <motion.a
                        href={p.code}
                        whileHover={{ scale: 1.05, x: 3 }}
                        className="flex items-center gap-2 text-slate-400 hover:text-[#06b6d4] transition-colors"
                      >
                        <span className="text-lg">⌨️</span> Code
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-[#111118] py-16 sm:py-20 md:py-24 px-4 sm:px-8 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7c3aed]/10 rounded-full blur-3xl" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <RevealSection>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#16161f] to-[#1a1a28] border border-[#7c3aed]/30 rounded-3xl p-8 sm:p-12 md:p-16 text-center relative overflow-hidden group"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#7c3aed]/15 via-transparent to-transparent pointer-events-none" />
              
              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#7c3aed] via-[#06b6d4] to-[#7c3aed] blur-xl opacity-50" />
              </div>
              
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500" />
              
              <div className="relative z-10">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#06b6d4] mb-3"
                >
                  Contact
                </motion.p>
                
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6"
                >
                  Let's Build <span className="gradient-text">Something</span>
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-slate-400 max-w-lg mx-auto mb-10 leading-relaxed text-base sm:text-lg"
                >
                  Have a project in mind or just want to say hi? My inbox is always open.
                </motion.p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                  {[
                    { icon: '📧', text: 'parthatwork24@gmail.com', href: 'mailto:parthatwork24@gmail.com' },
                    { icon: '🐙', text: 'GitHub', href: 'https://github.com' },
                    { icon: '💼', text: 'LinkedIn', href: 'https://linkedin.com' },
                    { icon: '🐦', text: 'Twitter', href: 'https://twitter.com' },
                  ].map((link, i) => (
                    <motion.a
                      key={link.text}
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: '0 10px 30px rgba(124, 58, 237, 0.3)'
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-br from-white/5 to-white/[0.02] border border-[#7c3aed]/30 rounded-xl text-base font-semibold hover:border-[#7c3aed] hover:bg-[#7c3aed]/10 transition-all duration-300 relative overflow-hidden group/link will-change-transform"
                    >
                      {/* Button shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/link:translate-x-full transition-transform duration-700" />
                      
                      <motion.span
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                        className="text-xl relative z-10"
                      >
                        {link.icon}
                      </motion.span>
                      <span className="relative z-10">{link.text}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </RevealSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 px-4 text-slate-400 text-sm border-t border-[#7c3aed]/20 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-[#7c3aed]/5 blur-2xl" />
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          Designed & built by <motion.span
            whileHover={{ scale: 1.1 }}
            className="gradient-text font-bold cursor-default inline-block"
          >
            Parth Rohit
          </motion.span> · {new Date().getFullYear()}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-2 text-xs text-slate-500 relative z-10"
        >
          Made with ❤️ and React
        </motion.div>
      </footer>
    </div>
  )
}
