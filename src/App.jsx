import { motion } from 'framer-motion'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 sm:px-8 py-5 flex justify-between items-center backdrop-blur-xl bg-[#0a0a0f]/70 border-b border-[#7c3aed]/20">
        <span className="text-2xl font-extrabold gradient-text">&lt;Parth /&gt;</span>
        <ul className="flex gap-6 md:gap-8 list-none">
          {['About', 'Skills', 'Education', 'Projects', 'Contact'].map(item => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase()}`}
                className="text-slate-400 text-sm font-medium hover:text-slate-100 transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Sections */}
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      {/* Footer */}
      <footer className="text-center py-8 px-6 text-slate-400 text-sm border-t border-[#7c3aed]/20 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-[#7c3aed]/5 blur-2xl" />
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          Designed & built by{' '}
          <motion.span
            whileHover={{ scale: 1.1 }}
            className="gradient-text font-bold cursor-default inline-block"
          >
            Parth Rohit
          </motion.span>
          {' '}· {new Date().getFullYear()}
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
