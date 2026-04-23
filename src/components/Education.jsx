import { motion } from 'framer-motion'
import { GraduationCap, Calendar } from 'lucide-react'

const education = [
  {
    icon: GraduationCap,
    degree: 'Master of Computer Applications',
    University: 'Gujarat Technological University',
    period: '2024 - 2026',
    desc: 'Specialized in Frontend development. SPI: 7.82',
  },
  {
    icon: GraduationCap,
    degree: 'Bachelor of Computer Applications',
    University: 'Sardar Patel University',
    period: '2021 - 2024',
    desc: 'Focus on Website development. GPA: 6.82',
  },
]

export default function Education() {
  return (
    <section id="education" className="w-full py-20 md:py-28 flex justify-center" style={{ backgroundColor: '#0a0a0f' }}>
      <div className="w-full max-w-5xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-bold tracking-widest uppercase text-[#06b6d4] mb-4">
            Education
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            Academic <span className="gradient-text">Background</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl">
            My journey through higher education.
          </p>
        </motion.div>
        
        <div className="space-y-10">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="w-full bg-gradient-to-br from-[#16161f] to-[#1a1a28] border border-[#7c3aed]/20 rounded-3xl p-8 md:p-10 flex flex-col sm:flex-row gap-8 items-start relative overflow-hidden group hover:border-[#7c3aed] transition-all duration-500"
            >
              <motion.div
                initial={{ height: 0 }}
                whileHover={{ height: '100%' }}
                transition={{ duration: 0.5 }}
                className="absolute left-0 top-0 w-1 bg-gradient-to-b from-[#7c3aed] to-[#06b6d4]"
              />
              
              <div className="absolute -right-1/2 top-1/2 w-64 h-64 bg-[#7c3aed]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 group-hover:-right-1/4 transition-all duration-700 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              <motion.div
                whileHover={{ rotate: 12, scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="w-24 h-24 flex-shrink-0 flex items-center justify-center text-5xl bg-gradient-to-br from-[#7c3aed]/30 to-[#06b6d4]/30 border-2 border-[#7c3aed]/40 rounded-2xl relative z-10"
              >
                <edu.icon className="text-4xl text-[#06b6d4]" />
              </motion.div>
              
              <div className="flex-1 relative z-10 min-w-0">
                <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-slate-100 to-[#06b6d4] bg-clip-text text-transparent">
                  {edu.degree}
                </h3>
                <div className="text-lg font-semibold text-[#06b6d4] mb-3">{edu.school}</div>
                <div className="inline-flex items-center gap-2 text-sm text-slate-400 bg-[#7c3aed]/15 px-4 py-2 rounded-full border border-[#7c3aed]/30 mb-4">
                  <Calendar className="text-[#06b6d4] w-4 h-4" />
                  <span>{edu.period}</span>
                </div>
                <p className="text-base text-slate-400 leading-relaxed">{edu.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
