import { motion } from 'framer-motion'

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

export default function Projects() {
  return (
    <section id="projects" className="w-full py-20 md:py-28 relative flex justify-center" style={{ backgroundColor: '#0a0a0f' }}>
      <div className="w-full max-w-7xl px-6 sm:px-8">
        
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#7c3aed]/5 rounded-full blur-3xl -z-10" />
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-[#06b6d4]/5 rounded-full blur-3xl -z-10" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative z-10"
        >
          <p className="text-sm font-bold tracking-widest uppercase text-[#06b6d4] mb-3">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A selection of things I've built recently.
          </p>
        </motion.div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, type: 'spring', stiffness: 100 }}
              whileHover={{ scale: 1.02 }}
              className="w-full bg-gradient-to-br from-[#16161f] to-[#1a1a28] border border-[#7c3aed]/20 rounded-3xl p-8 relative overflow-hidden group hover:border-[#7c3aed]/50 transition-all duration-300 flex flex-col"
            >
              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#7c3aed] via-[#06b6d4] to-[#7c3aed] origin-left"
              />
              
              <div className="absolute inset-0 bg-gradient-to-br from-[#7c3aed]/10 to-[#06b6d4]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              <div className="relative z-10 flex-1 flex flex-col">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  className="text-5xl mb-5"
                >
                  {project.icon}
                </motion.div>
                
                <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-slate-100 to-[#06b6d4] bg-clip-text text-transparent">
                  {project.title}
                </h3>
                
                <p className="text-base text-slate-400 leading-relaxed mb-6 flex-1">
                  {project.desc}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="bg-[#7c3aed]/15 text-[#06b6d4] border border-[#06b6d4]/30 rounded-full px-3 py-1.5 text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 text-sm font-semibold pt-4 border-t border-[#7c3aed]/20">
                  <motion.a
                    href={project.demo}
                    whileHover={{ scale: 1.05, x: 3 }}
                    className="flex items-center gap-2 text-slate-400 hover:text-[#06b6d4] transition-colors"
                  >
                    <span className="text-lg">🔗</span> Live Demo
                  </motion.a>
                  <motion.a
                    href={project.code}
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
      </div>
    </section>
  )
}
