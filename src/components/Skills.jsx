import { motion } from 'framer-motion'
import { Atom, Square, Triangle, Palette, Circle, Database, Container, Cloud, GitBranch, Zap } from 'lucide-react'

const skills = [
  { icon: Atom, name: 'React' },
  { icon: Square, name: 'JavaScript' },
  { icon: Triangle, name: 'TypeScript' },
  { icon: Palette, name: 'CSS / Tailwind' },
  { icon: Circle, name: 'Node.js' },
  { icon: Database, name: 'PostgreSQL' },
  { icon: Container, name: 'Docker' },
  { icon: Cloud, name: 'AWS' },
  { icon: GitBranch, name: 'Git' },
  
]

export default function Skills() {
  return (
    <section id="skills" className="w-full bg-[#111118] py-20 md:py-28 relative overflow-hidden flex justify-center">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#7c3aed]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#06b6d4]/10 rounded-full blur-3xl" />
      
      <div className="w-full max-w-6xl px-6 sm:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-bold tracking-widest uppercase text-[#06b6d4] mb-3">
            Tech Stack
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Skills & <span className="gradient-text">Tools</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Technologies I use to bring ideas to life.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, type: 'spring', stiffness: 100 }}
              whileHover={{ scale: 1.08 }}
              className="bg-gradient-to-br from-[#16161f] to-[#1a1a28] border border-[#7c3aed]/20 rounded-2xl p-5 text-center font-semibold hover:border-[#7c3aed] transition-all duration-300 cursor-pointer relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#7c3aed]/20 to-[#06b6d4]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              
              <motion.span
                whileHover={{ scale: 1.3, rotate: 360 }}
                transition={{ duration: 0.6, type: 'spring' }}
                className="text-4xl block mb-2 relative z-10"
              >
                <skill.icon className="w-10 h-10 text-[#06b6d4] mx-auto" />
              </motion.span>
              <span className="text-sm relative z-10">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
